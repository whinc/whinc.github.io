import { Modal } from 'antd';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export function createModal(ContentComponent) {
  const ContentComponent2 = React.forwardRef((props, ref) => ContentComponent(props, ref));

  return function NewModal({ modalProps: modalProps, ...props }) {
    const [open, setOpen] = useState(false);

    // store UI data
    const [state, setState] = useState({});
    const [payload, setPayload] = useState({});
    const ref = useRef();

    const close = useCallback(() => {
      setOpen(false);
      // reset
      setState({});
      setPayload({});
    }, []);

    const actions = useMemo(() => ({ close, state, setState, ref }), [close, state]);

    useEffect(() => {
      const show = (_payload) => {
        setOpen(true);
        setPayload(() => _payload);
      };
      NewModal.show = show;
      return () => {
        NewModal.show = null;
      };
    }, []);

    const { modalProps: modalProps2 = {}, ...props2 } = useMemo(
      () => (typeof payload === 'function' ? payload(actions) : payload),
      [actions, payload],
    );

    /** @type {import('antd').ModalProps} */
    const defaultModalProps = {
      maskClosable: false,
      destroyOnClose: true,
      onCancel: close,
      onOk: close,
    };
    return (
      <Modal {...defaultModalProps} {...modalProps} {...modalProps2} open={open}>
        <ContentComponent2 ref={ref} {...props} {...props2} />
      </Modal>
    );
  };
}

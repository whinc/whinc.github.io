import { Modal, ModalProps } from 'antd';
import React, { useCallback, useImperativeHandle, useState } from 'react';
import { ContentProps, MyModalContent } from './MyModalContent';

export interface MyModalProps {
  onSuccess?(): void
}

export interface MyModalInstance {
  open(payload?: Payload): void
  close(): void
}

type Payload = ContentProps & { modalProps?: ModalProps }

export const MyModal = React.forwardRef<MyModalInstance, MyModalProps>(({ onSuccess }, ref) => {
  const [open, setOpen] = useState(false)
  const [payload, setPayload] = useState<Payload>({});

  const onOk = useCallback(async () => {
    onSuccess?.();
  }, [onSuccess]);

  const openModal = useCallback((_payload = {}) => {
    setOpen(true)
    setPayload(_payload);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false)
    // reset payload
    setPayload({})
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      open: openModal,
      close: closeModal
    }),
    [open],
  );

  return (
    <Modal {...payload.modalProps} open={open}><MyModalContent {...payload} /></Modal>
  );
});

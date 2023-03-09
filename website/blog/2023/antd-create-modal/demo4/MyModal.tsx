import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Form, Input, InputNumber, message, Modal } from "antd";
import React, { useState } from "react";

export interface MyModalProps {
  initialValues?: any;
  onSubmit?: (values: any) => Promise<any>;
}

export default NiceModal.create(function MyModal(props: MyModalProps) {
  const [form] = Form.useForm();
  const modal = useModal();
  const [loading, setLoading] = useState(false);
  return (
    <Modal
      {...NiceModal.antdModal(modal)}
      title="注册用户"
      confirmLoading={loading}
      onOk={() => {
        form
          .validateFields()
          .then((formData) => {
            setLoading(true);
            return props.onSubmit(formData);
          })
          .then(
            () => {
              setLoading(false);
              modal.hide();
              modal.resolve();
            },
            (error) => {
              message.error(String(error));
              setLoading(false);
            }
          );
      }}
    >
      <Form form={form} initialValues={props.initialValues}>
        <Form.Item name={"name"} label="姓名">
          <Input />
        </Form.Item>
        <Form.Item name={"age"} label="年龄">
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
});

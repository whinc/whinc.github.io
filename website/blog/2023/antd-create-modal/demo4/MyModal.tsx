import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Form, Input, InputNumber, Modal } from "antd";
import React, { useState } from "react";

export interface MyModalProps {
  initialValues?: any;
  onSubmit?: (values: any) => Promise<any>;
}

export default NiceModal.create(({ onSubmit, initialValues }: MyModalProps) => {
  const [form] = Form.useForm();
  const modal = useModal();
  const [loading, setLoading] = useState(false);
  return (
    <Modal
      {...NiceModal.antdModal(modal)}
      title="注册用户"
      confirmLoading={loading}
      onOk={async () => {
        const values = await form.validateFields();
        try {
          setLoading(true);
          await onSubmit(values);
          modal.hide();
          modal.resolve();
        } catch (err) {
          modal.reject(err);
        } finally {
          setLoading(false);
        }
      }}
    >
      <Form form={form} initialValues={initialValues}>
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

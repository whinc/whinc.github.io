import { Form, Input, InputNumber } from "antd";
import React, { useImperativeHandle } from "react";

export interface ContentProps {
  initialValues?: any;
}

export interface ContentInstance {
  submit(): Promise<void>;
}

export function MyModalContent(
  props: ContentProps,
  ref: React.MutableRefObject<ContentInstance>
) {
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    async submit() {
      return await form.validateFields();
    },
  }));
  return (
    <Form form={form} initialValues={props.initialValues}>
      <Form.Item name={"name"} label="姓名">
        <Input />
      </Form.Item>
      <Form.Item name={"age"} label="年龄">
        <InputNumber />
      </Form.Item>
    </Form>
  );
}

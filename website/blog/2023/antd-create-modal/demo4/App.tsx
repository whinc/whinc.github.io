import NiceModal from "@ebay/nice-modal-react";
import { Button, message } from "antd";
import React from "react";
import MyModal, { MyModalProps } from "./MyModal";

const mockRequest = (data: any) => new Promise((r) => setTimeout(r, 2000));
export default function App() {
  return (
    <NiceModal.Provider>
      <Button
        onClick={() => {
          NiceModal.show<any>(MyModal, {
            initialValues: {
              name: "zhangsan",
              age: 20,
            },
            async onSubmit(values) {
              await mockRequest(values);
              message.success("提交表单：" + JSON.stringify(values));
            },
          } as MyModalProps).then(
            (value) => message.info(JSON.stringify(value)),
            (error) => {
              message.error(String(error));
            }
          );
        }}
      >
        显示弹窗
      </Button>
    </NiceModal.Provider>
  );
}

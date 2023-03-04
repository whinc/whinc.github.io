import { Button, message } from "antd";
import "antd/dist/antd.css";
import React from "react";
import MyModal from "./MyModal";

export default function App() {
  return (
    <>
      <Button
        onClick={() =>
          MyModal.show(({close}) => ({
            value: 'hello world!',
            modalProps: {
              onCancel: close,
              onOk: async () => {
                message.success("ok");
                close()
              },
            },
          }))
        }
      >
        显示弹窗
      </Button>
      <MyModal />
    </>
  );
}

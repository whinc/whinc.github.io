import { Button, message } from "antd";
import React, { useRef } from "react";
import { MyModal, MyModalInstance } from "./MyModal";

export default function App() {
  const ref = useRef<MyModalInstance>(null);
  return (
    <>
      <Button
        onClick={() =>
          ref.current?.open({
            value: "hello world!",
            modalProps: {
              onCancel: ref.current.close,
              onOk: async () => {
                message.success("ok");
                ref.current?.close();
              },
            },
          })
        }
      >
        显示弹窗
      </Button>
      <MyModal ref={ref} />
    </>
  );
}

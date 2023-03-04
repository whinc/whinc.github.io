import { Button, message } from "antd";
import "antd/dist/antd.css";
import React from "react";
import MyModal from "../demo2/MyModal";

const mockRequest = () => new Promise((r) => setTimeout(r, 2000))

export default function App() {
  return (
    <>
      <Button
        onClick={() =>
          MyModal.show(({close, state, setState, ref}) => ({
            value: 'hello world!',
            modalProps: {
              confirmLoading: state.loading,
              onCancel: close,
              onOk: async () => {
                setState({loading: true})
                await mockRequest()
                setState({loading: false})
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

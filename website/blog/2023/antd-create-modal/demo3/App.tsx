import { Button, message } from "antd";
import React from "react";
import MyModal from "./MyModal";

const mockRequest = (data: any) => new Promise((r) => setTimeout(r, 2000));

export default function App() {
  return (
    <>
      <Button
        onClick={() =>
          MyModal.show(({ close, state, setState, ref }) => ({
            initialValues: {
              name: "zhangsan",
              age: 20,
            },
            modalProps: {
              title: "注册用户",
              confirmLoading: state.loading,
              onCancel: close,
              onOk: async () => {
                setState({ loading: true });
                const formData = await ref.current.submit();
                await mockRequest(formData);
                setState({ loading: false });
                message.success("提交表单：" + JSON.stringify(formData));
                close();
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

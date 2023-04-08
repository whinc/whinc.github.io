import NiceModal from "@ebay/nice-modal-react";
import { Button, message } from "antd";
import React from "react";
import MyModal from "./MyModal";

const mockRequest = (data: any) => new Promise((r) => setTimeout(r, 2000));

export default function App() {
  return (
    <NiceModal.Provider>
      <Button
        onClick={() => {
          const props = {
            initialValues: {
              name: "zhangsan",
              age: 20,
            },
            async onSubmit(values) {
              const destory = message.loading(
                "提交数据：" + JSON.stringify(values)
              );
              await mockRequest(values);
              destory();
            },
          };

          NiceModal.show(MyModal, props).then(
            () => message.success("提交成功!"),
            (error) => {
              message.error("提交失败：" + error.message);
            }
          );
        }}
      >
        显示弹窗
      </Button>
    </NiceModal.Provider>
  );
}

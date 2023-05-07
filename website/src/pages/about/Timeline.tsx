import { LoadingOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import React from "react";

export default function WorkTimeline() {
  return (
    <Timeline
      mode="left"
      items={[
        {
          label: "2013-06-30",
          children: (
            <a href="https://yangtzeu.edu.cn/" target="_blank" rel="noreferrer">
              本科毕业-长江大学-网络工程
            </a>
          ),
        },
        {
          label: "2016-06-30",
          children: (
            <a href="https://www.gdut.edu.cn/" target="_blank" rel="noreferrer">
              硕士毕业-广东工业大学-计算机科学与技术
            </a>
          ),
        },
        {
          label: "2016-09-01",
          children: (
            <a href="https://webank.com/" target="_blank" rel="noreferrer">
              微众银行-移动端开发
            </a>
          ),
        },
        {
          label: "2019-03-11",
          dot: <LoadingOutlined />,
          children: (
            <a href="https://www.tencent.com/" target="_blank" rel="noreferrer">
              腾讯-Web前端开发
            </a>
          ),
        },
      ]}
    />
  );
}

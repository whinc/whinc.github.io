import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import React from "react";

// Default implementation, that you can customize
export default function Root({ children }) {
  return <ConfigProvider locale={zhCN}>{children}</ConfigProvider>;
}

import { useColorMode } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import { ConfigProvider, theme } from "antd";
import React from "react";

export type PageLayoutProps = React.ComponentProps<typeof Layout> & {};

export default function PageLayout(props: PageLayoutProps) {
  return (
    <Layout>
      <PageLayoutInternal {...props} />
    </Layout>
  );
}

function PageLayoutInternal(props: PageLayoutProps) {
  const { colorMode } = useColorMode();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colorMode === "dark" ? "#40a9ff" : "#2f54eb",
        },
        algorithm:
          colorMode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      {props.children}
    </ConfigProvider>
  );
}

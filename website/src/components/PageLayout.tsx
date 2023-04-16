import { useColorMode } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import { ConfigProvider, theme } from "antd";
import React from "react";
import usePrimaryColor from "../hooks/usePrimaryColor";

export type PageLayoutProps = React.ComponentProps<typeof Layout> & {
  children?: React.ReactNode;
};

export default function PageLayout({ children, ...props }: PageLayoutProps) {
  return (
    <Layout noFooter {...props}>
      <PageLayoutInternal>{children}</PageLayoutInternal>
    </Layout>
  );
}

function PageLayoutInternal(props: PageLayoutProps) {
  const { colorMode } = useColorMode();
  const colorPrimary = usePrimaryColor();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary,
        },
        algorithm:
          colorMode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      {props.children}
    </ConfigProvider>
  );
}

import { LinkOutlined, SearchOutlined } from "@ant-design/icons";
import Layout from "@theme/Layout";
import { Card, Col, Grid, Input, Row, Space } from "antd";
import React, { useCallback, useState } from "react";
import GiscusComment from "../components/GiscusComment";
import { highlightKeyword } from "../utils";

type ToolItem = {
  title: string;
  description?: string;
  coverUrl?: string;
  siteUrl?: string;
};

const tools: Array<ToolItem> = [
  {
    title: "regular expression 101",
    siteUrl: "https://regex101.com/",
    description: "正则表达式测试",
  },
  {
    title: "Regex-Vis",
    siteUrl: "https://regex-vis.com/",
    description: "正则表达式可视化",
  },
  {
    title: "Glob Tool",
    siteUrl: "https://www.digitalocean.com/community/tools/glob",
    description: "glob测试",
  },
  {
    title: "NGINXConfig",
    siteUrl:
      "https://www.digitalocean.com/community/tools/nginx?global.app.lang=enUS",
    description: "nginx配置生成",
  },
  {
    title: "JWT Debugger",
    siteUrl: "https://jwt.io/",
    description: "JSON Web Token 调试",
  },
  {
    title: "Runkit",
    siteUrl: "https://runkit.com/",
    description:
      "开箱即用的 Node.js 沙盒，预装了各个版本的 Node.js，可直接使用 npm 上的包 ,,, 开箱即用的 Node.js 沙盒，预装了各个版本的 Node.js，可直接使用 npm 上的包",
  },
];

export default function ToolsPage() {
  const [keyword, setKeyword] = useState("");
  const filterFn = useCallback(
    (item: ToolItem) => {
      if (!keyword) return true;
      if (
        item.title.toUpperCase().includes(keyword.toUpperCase()) ||
        (item.description &&
          item.description.toUpperCase().includes(keyword.toUpperCase()))
      )
        return true;
      return false;
    },
    [keyword]
  );
  const screens = Grid.useBreakpoint();
  return (
    <Layout title="工具" description="开发常用的一些在线工具">
      <div
        style={
          screens["xs"] ? { padding: "20px 10px" } : { padding: "50px 20vw" }
        }
      >
        <Input
          addonBefore={
            <Space>
              <span>搜索</span>
              <SearchOutlined />
            </Space>
          }
          style={{ marginBottom: 40 }}
          size="large"
          placeholder="输入关键词"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Row gutter={20} wrap>
          {tools.filter(filterFn).map((item, i) => (
            <Col
              key={i}
              span={6}
              xs={24}
              lg={12}
              xl={8}
              xxl={6}
              style={{ marginBottom: 20 }}
            >
              <a href={item.siteUrl} target={"_blank"} rel="noreferrer">
                <Card
                  hoverable
                  title={
                    <span>
                      {highlightKeyword(item.title, keyword)} <LinkOutlined />
                    </span>
                  }
                >
                  <Space
                    direction="vertical"
                    style={{ height: 80, overflow: "auto" }}
                  >
                    <div>{highlightKeyword(item.description, keyword)}</div>
                    {/* <img src={item.coverUrl} /> */}
                  </Space>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
        <div style={{ marginTop: 20 }}>
          <GiscusComment />
        </div>
      </div>
    </Layout>
  );
}

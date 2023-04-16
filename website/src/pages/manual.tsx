import { LinkOutlined, SearchOutlined } from "@ant-design/icons";
import { Card, Col, Grid, Input, Row, Space, Tag } from "antd";
import React, { useCallback, useState } from "react";
import GiscusComment from "../components/GiscusComment";
import PageLayout from "../components/PageLayout";
import { highlightKeyword } from "../utils";

type ToolItem = {
  title: string;
  description?: string;
  coverUrl?: string;
  siteUrl?: string;
  tags?: string[];
};

const tools: Array<ToolItem> = [
  {
    title: "DevDocs",
    siteUrl: "https://devdocs.io/",
    description: "API Documentation Browser",
    tags: [
      "javascript",
      "css",
      "html",
      "nginx",
      "docker",
      "node.js",
      "make",
      "lodash",
      "http",
    ],
  },
  {
    title: "MDN",
    siteUrl: "https://developer.mozilla.org/en-US/docs/Web",
    description: "Mozilla Developer Network, Web technology for developers",
    tags: ["javascript", "css", "html", "http"],
  },
  {
    title: "Node.js API",
    siteUrl: "https://nodejs.dev/en/api/",
    description: "Node.js API Documentation",
  },
  {
    title: "Linux Command",
    siteUrl: "https://wangchujiang.com/linux-command/",
    description:
      "Linux命令大全搜索工具，内容包含Linux命令手册、详解、学习、搜集。",
  },
  {
    title: "vim 中文速查表",
    siteUrl:
      "https://github.com/skywind3000/awesome-cheatsheets/blob/master/editors/vim.txt",
  },
  {
    title: "tmux 速查表",
    siteUrl:
      "https://github.com/skywind3000/awesome-cheatsheets/blob/master/tools/tmux.txt",
  },
  {
    title: "bash 速查表",
    siteUrl:
      "https://github.com/skywind3000/awesome-cheatsheets/blob/master/languages/bash.sh",
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
      if (Array.isArray(item.tags) && item.tags.length > 0)
        return item.tags.some((tag) =>
          tag.toUpperCase().includes(keyword.toUpperCase())
        );
      return false;
    },
    [keyword]
  );

  const sortFn = useCallback(
    (a: ToolItem, b: ToolItem) =>
      a.title < b.title ? -1 : a.title > b.title ? 1 : 0,
    []
  );

  const screens = Grid.useBreakpoint();
  return (
    <PageLayout title="工具" description="开发常用的一些在线工具">
      <div
        style={
          screens["xs"] ? { padding: "20px 10px" } : { padding: "50px 20vw" }
        }
      >
        <Input
          autoFocus
          allowClear
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
          {tools
            .filter(filterFn)
            .sort(sortFn)
            .map((item, i) => (
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
                      size={16}
                      style={{ minHeight: 80, maxHeight: 160, width: "100%" }}
                    >
                      <div>{highlightKeyword(item.description, keyword)}</div>
                      {/* <img src={item.coverUrl} /> */}
                      <div style={{ whiteSpace: "nowrap", overflow: "auto" }}>
                        {item.tags
                          ?.filter(
                            (tag) =>
                              !keyword ||
                              tag.toUpperCase().includes(keyword.toUpperCase())
                          )
                          .map((tag) => (
                            <Tag key={tag} color={"green"}>
                              {highlightKeyword(tag, keyword)}
                            </Tag>
                          ))}
                      </div>
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
    </PageLayout>
  );
}

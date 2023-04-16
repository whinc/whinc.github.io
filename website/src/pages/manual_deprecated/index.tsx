import { LinkOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import styles from "./index.module.css";

type ItemConfig = {
  label: string;
  href: string;
  openInNewWindow?: boolean;
};

const items: ItemConfig[] = [
  {
    label: "MDN",
    href: "https://developer.mozilla.org/en-US/docs/Web",
    openInNewWindow: true,
  },
  {
    label: "Node.js API",
    href: "https://nodejs.dev/en/api/v18/documentation/",
  },
];

export default function ManualPage() {
  const [selectedKeys, setSelectedKeys] = useState([items[0].label]);
  const selectedItem = items.find((v) => v.label === selectedKeys[0]);
  return (
    <PageLayout>
      <div className={styles.root}>
        <div className={styles.sideMenu}>
          <Menu
            selectedKeys={selectedKeys}
            onSelect={({ selectedKeys }) => setSelectedKeys(selectedKeys)}
            items={items.map((v) => ({
              label: (
                <span>
                  {v.label} {v.openInNewWindow && <LinkOutlined />}
                </span>
              ),
              key: v.label,
            }))}
          />
        </div>
        <iframe
          className={styles.content}
          style={{ width: "100%", height: "100%", border: "none" }}
          src={selectedItem.href}
        />
      </div>
    </PageLayout>
  );
}

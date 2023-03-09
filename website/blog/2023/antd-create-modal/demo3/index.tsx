import App_ from "!!raw-loader!./App";
import MyModal_ from "!!raw-loader!./MyModal";
import CodeBlock from "@theme/CodeBlock";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import React from "react";
import App from "./App";

export default function () {
  return (
    <Tabs>
      <TabItem value="2" label="App">
        <CodeBlock language="tsx">{App_}</CodeBlock>
      </TabItem>
      <TabItem value="3" label="MyModal">
        <CodeBlock language="tsx">{MyModal_}</CodeBlock>
      </TabItem>
      <TabItem value="1" label="效果">
        <App />
      </TabItem>
    </Tabs>
  );
}

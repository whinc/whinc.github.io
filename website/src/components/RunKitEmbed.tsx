import CodeBlock from "@theme/CodeBlock";
import { useExternal } from "ahooks";
import { Spin } from "antd";
import React, { useEffect, useRef, useState } from "react";

// 参考: https://runkit.com/docs/embed
type RunKitEmbedProps = EmbedOptions;

export default function RunKitEmbed({ source, ...props }: RunKitEmbedProps) {
  const [rendering, setRendering] = useState(false);
  const status = useExternal("/js/runkit.js", {
    js: {
      async: true,
      // defer: true,
    },
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "ready" && window.RunKit && ref.current) {
      setRendering(true);
      const res = window.RunKit.createNotebook({
        element: ref.current,
        nodeVersion: "18.x.x",
        source: source.trim(),
        ...props,
      });
      res.onLoad = () => setRendering(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <>
      {(status !== "ready" || rendering) && (
        <CodeBlock language="javascript">{source.trim()}</CodeBlock>
      )}
      <div ref={ref}></div>
      {process.env.NODE_ENV === "development" && (
        <Spin spinning={status === "loading"} tip="加载 RunKit ...">
          <Spin
            spinning={status === "ready" && rendering}
            tip="渲染 RunKit ..."
          ></Spin>
        </Spin>
      )}
    </>
  );
}

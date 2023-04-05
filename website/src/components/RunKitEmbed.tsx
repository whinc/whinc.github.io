import React, { useEffect, useRef } from "react";

// reference: https://runkit.com/docs/embed
type RunKitEmbedProps = {
  [key: string]: any;
};

export default function RunKitEmbed(props: RunKitEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.RunKit && ref.current) {
      window.RunKit.createNotebook({
        element: ref.current,
        evaluateOnLoad: true,
        nodeVersion: "18.x.x",
        ...props,
      });
    }
  }, []);
  return <div ref={ref}></div>;
}

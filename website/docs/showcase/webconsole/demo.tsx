import { useExternal } from "ahooks";
import { useEffect } from "react";

export default function Demo() {
  const s1 = useExternal("https://unpkg.com/vue@2", {
    type: "js",
  });
  const s2 = useExternal("https://unpkg.com/@whinc/web-console", {
    type: "js",
    js: {
      defer: true,
    },
  });
  useEffect(() => {
    if (s1 === "ready" && s2 === "ready" && window.WebConsole) {
      new window.WebConsole({});
      setTimeout(() => console.log("欢迎访问 whincwu(右耳朵猫) 的博客!"), 500);
    }
  }, [s1, s2]);

  return s1 === "loading" || s2 === "loading"
    ? "Demo 加载中..."
    : s1 === "ready" && s2 === "ready"
    ? "Demo 加载完毕，请看页面右下角！"
    : "Demo 加载失败";
}

import { useColorMode } from "@docusaurus/theme-common";
export default function usePrimaryColor() {
  const { colorMode } = useColorMode();
  // 与 src/css/custom.css 中的黑白主题色对应
  return colorMode === "dark" ? "#40a9ff" : "#2f54eb";
}

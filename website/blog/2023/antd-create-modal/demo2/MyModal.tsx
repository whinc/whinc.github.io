import React from "react";
import { createModal } from "../createModal";

export interface ContentProps {
  value?: any;
}

export default createModal(function MyModalContent(props: ContentProps) {
  return <div>{props.value}</div>;
});

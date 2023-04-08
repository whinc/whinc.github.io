import { ModalProps } from "antd";
import type { Dispatch, SetStateAction } from "react";

interface ModalComponent<Props, Ref> {
  (props: Partial<Props>): JSX.Element;
  show<State = any>(
    props?: Props | ((actions: Actions<State, Ref>) => Props)
  ): void;
}

interface Actions<State = any, Ref = any> {
  close(): void;
  state: State;
  setState: Dispatch<SetStateAction<State>>;
  ref: Ref;
}

export function createModal<
  C extends (props: any, ref: any) => JSX.Element = any
>(
  component: C
): ModalComponent<
  Parameters<C>[0] & { modalProps?: ModalProps },
  Parameters<C>[1]
>;

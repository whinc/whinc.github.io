import { ModalProps } from 'antd';
import type { Dispatch, SetStateAction } from 'react';
import React from 'react';

interface ModalComponent<Props> {
  (props: Partial<Props>): JSX.Element;
  show<State = any, Instance = any>(props?: Props | ((actions: Actions<State, Instance>) => Props)): void;
}

interface Actions<State = any, Instance = any> {
  close(): void;
  state: State;
  setState: Dispatch<SetStateAction<State>>;
  ref: React.MutableRefObject<Instance>;
}

export function createModal<C extends (props: any, ref: any) => JSX.Element = any>(
  component: C,
): ModalComponent<Parameters<C>[0] & { modalProps?: ModalProps }>;

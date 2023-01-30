import { ReactNode } from 'react';

export interface GlobalInterfaceContext {
  navigate: (value: string) => void;
  next: () => void;
  prev: () => void;
}

export interface INode {
  children: ReactNode;
}

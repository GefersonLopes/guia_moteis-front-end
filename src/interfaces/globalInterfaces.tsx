import { ReactNode } from 'react';

export interface GlobalInterfaceContext {
  navigate: (value: string) => void;
}

export interface INode {
  children: ReactNode;
}

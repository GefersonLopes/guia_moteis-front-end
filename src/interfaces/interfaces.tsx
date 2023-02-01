export interface InterfaceContextLogic {
  loading: () => void;
  noLoading: () => void;
  isLoad: boolean;
  noRouter: () => void;
  linkMotel: string;
  sobre: string;
  tracarRota: string;
}

export interface ICardCortesias {
  img: string;
  title: string;
  description: string;
}

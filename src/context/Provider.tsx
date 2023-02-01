import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { INode } from '../interfaces/globalInterfaces';
import { InterfaceContextLogic } from '../interfaces/interfaces';

export const ContextLogic = createContext({} as InterfaceContextLogic);

export const ContextProviderLogic = ({ children }: INode) => {
  const linkMotel =
    'https://www.guiademoteis.com.br/florianopolis/moteis/Vison-Motel';

  const sobre =
    'https://www.guiademoteis.com.br/florianopolis/moteis/Vison-Motel#box-about';

  const tracarRota =
    'https://www.google.com/maps/dir//-26.236518,-48.824718/@-26.2537878,-48.9417913,12z';

  const [isLoad, setIsLoad] = useState(true);

  const loading = () => {
    setIsLoad(false);
  };

  const noLoading = () => {
    setIsLoad(true);
  };

  const noRouter = () => {
    toast('Esta rota ainda não foi feita :(');
  };

  return (
    <ContextLogic.Provider
      value={{
        isLoad,
        loading,
        noLoading,
        noRouter,
        linkMotel,
        sobre,
        tracarRota,
      }}
    >
      {children}
    </ContextLogic.Provider>
  );
};

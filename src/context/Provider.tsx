import { createContext, useState } from 'react';
import { INode } from '../interfaces/globalInterfaces';
import { InterfaceContextLogic } from '../interfaces/interfaces';

export const ContextLogic = createContext({} as InterfaceContextLogic);

export const ContextProviderLogic = ({ children }: INode) => {
  const [isLoad, setIsLoad] = useState(true);

  const loading = () => {
    setIsLoad(false);
  };

  const noLoading = () => {
    setIsLoad(true);
  };

  return (
    <ContextLogic.Provider
      value={{
        isLoad,
        loading,
        noLoading,
      }}
    >
      {children}
    </ContextLogic.Provider>
  );
};

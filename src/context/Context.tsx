// import react
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import interface
import { GlobalInterfaceContext, INode } from '../interfaces/globalInterfaces';

export const Context = createContext({} as GlobalInterfaceContext);

export const ContextProvider = ({ children }: INode) => {
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState(0);
  const items = document.querySelectorAll('.item');

  const handleCurrentItem = (step: number) => {
    setCurrentItem((currentItem + step + 3) % 3);
  };

  const handleClassList = () => {
    items.forEach((item) => {
      item.classList.remove('current-item', 'center-item', 'left', 'right');
    });
    items[currentItem].classList.add('current-item', 'center-item');
    items[(currentItem + 1) % 3].classList.add('left');
    items[(currentItem + 2) % 3].classList.add('right');
  };

  const next = () => {
    handleCurrentItem(1);
    handleClassList();
  };

  const prev = () => {
    handleCurrentItem(-1);
    handleClassList();
  };

  return (
    <Context.Provider
      value={{
        navigate,
        next,
        prev,
      }}
    >
      {children}
    </Context.Provider>
  );
};

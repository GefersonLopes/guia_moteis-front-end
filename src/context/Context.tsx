// import react
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import interface
import { GlobalInterfaceContext, INode } from '../interfaces/globalInterfaces';

export const Context = createContext({} as GlobalInterfaceContext);

export const ContextProvider = ({ children }: INode) => {
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState(1);

  const next = () => {
    const items = document.querySelectorAll('.item');

    setCurrentItem(currentItem + 1);

    if (currentItem >= 2) {
      setCurrentItem(0);
    }

    items.forEach((item) => item.classList.remove('current-item'));

    items[currentItem].scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });

    items[currentItem].classList.add('current-item');
  };

  const prev = () => {
    const items = document.querySelectorAll('.item');

    setCurrentItem(currentItem - 1);

    if (currentItem <= 0) {
      setCurrentItem(2);
    }

    items.forEach((item) => item.classList.remove('current-item'));

    items[currentItem].scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });

    items[currentItem].classList.add('current-item');
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

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

    items.forEach((item) => {
      item.classList.remove('current-item');
      item.classList.remove('current-item');
      item.classList.remove('center-item');
      item.classList.remove('left');
      item.classList.remove('right');
    });

    items[currentItem].scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });

    items[currentItem].classList.add('current-item');
    items[currentItem].classList.add('center-item');

    console.log(items);

    if (currentItem == 0) {
      items[currentItem + 1].classList.add('left');
      items[currentItem + 2].classList.add('right');
    }

    if (currentItem == 1) {
      items[currentItem - 1].classList.add('left');
      items[currentItem + 1].classList.add('right');
    }

    if (currentItem == 2) {
      items[currentItem - 2].classList.add('left');
      items[currentItem - 1].classList.add('right');
    }
  };

  const prev = () => {
    const items = document.querySelectorAll('.item');

    setCurrentItem(currentItem - 1);

    if (currentItem <= 0) {
      setCurrentItem(2);
    }

    items.forEach((item) => {
      item.classList.remove('current-item');
      item.classList.remove('center-item');
      item.classList.remove('left');
      item.classList.remove('right');
    });

    items[currentItem].scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });

    items[currentItem].classList.add('current-item');

    if (currentItem == 0) {
      items[currentItem + 1].classList.add('left');
      items[currentItem + 2].classList.add('right');
    }

    if (currentItem == 1) {
      items[currentItem - 1].classList.add('left');
      items[currentItem + 1].classList.add('right');
    }

    if (currentItem == 2) {
      items[currentItem - 2].classList.add('left');
      items[currentItem - 1].classList.add('right');
    }
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

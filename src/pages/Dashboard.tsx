// import react
import { useContext } from 'react';

//import lottie animation
import { LottieLoad } from '../animation/lottie/componentAnimate/LottieLoad';

//import context-api
import { ContextLogic } from '../context/Provider';

// import's styled-components
import { SectionLoad } from '../components/styled_components/load/styled';
import { Cortesia } from '../sections/cortesia';
import { Home } from '../sections/home';
import { Localizacao } from '../sections/localizacao';
import { Motel } from '../sections/motel';
import { Suites } from '../sections/suites';

export const Dashboard = () => {
  const { isLoad, loading } = useContext(ContextLogic);
  setTimeout(() => loading(), 3000);
  return (
    <>
      {isLoad ? (
        <SectionLoad>
          <LottieLoad />
        </SectionLoad>
      ) : (
        <>
          <Home />
          <Suites />
          <Motel />
          <Cortesia />
          <Localizacao />
        </>
      )}
    </>
  );
};

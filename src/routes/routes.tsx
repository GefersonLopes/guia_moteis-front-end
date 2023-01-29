//import react
import { Route, Routes } from 'react-router-dom';

// import's styled-components
import { Dashboard } from '../pages/Dashboard';
import { Intro } from '../pages/Intro';

export const RouteInPage = (): any => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

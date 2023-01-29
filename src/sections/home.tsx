// import styled-components
import { Container_Main } from '../components/bootstrap/modal/modal';
import { Navbar_Bootstrap } from '../components/bootstrap/navbar/navbar';
import { Page } from '../components/styled_components/page/styled';

export const Home = () => {
  return (
    <Page id="pageHome">
      <Navbar_Bootstrap />
      <Container_Main />
    </Page>
  );
};

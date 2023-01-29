// import styled-components
import { SuitesCarousel } from '../components/bootstrap/carousel/caroulsel';
import { Div } from '../components/bootstrap/modal/styled';
import { Page } from '../components/styled_components/page/styled';

export const Suites = () => {
  return (
    <Page id="suites">
      <Div>
        <SuitesCarousel />
      </Div>
    </Page>
  );
};

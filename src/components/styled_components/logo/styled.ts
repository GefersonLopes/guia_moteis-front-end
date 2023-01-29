import styled from 'styled-components';

export const Aside = styled.aside`
  height: 100vh;
  width: 20vw;
  position: absolute;
  background-color: #7a7266;
  display: none;

  h1 {
    color: #fff;
    transform: rotate(-90deg);

    font-family: Poppins;
    font-size: 3vw;
    font-weight: bold;
    text-align: center;
  }

  @media screen and (min-width: 457px) {
    width: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

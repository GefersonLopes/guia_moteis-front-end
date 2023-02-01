import styled from 'styled-components';

export const CardMotel_Bootstrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  font-family: Playfair;
  font-weight: bold;
  gap: 1.5rem;

  h1 {
    font-size: 2.25rem;
    @media screen and (min-width: 768px) {
      font-size: 3vw;
    }
  }

  @media screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
    gap: 0;

    flex-direction: row;
  }

  div {
    width: 85%;
    margin: 0 auto;
    background-color: #fff;
    padding: 5rem 1rem;
    margin-top: -3rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);

    @media screen and (min-width: 768px) {
      margin: 0;
      width: 60%;
      height: 90%;
      padding: 4vh;
      margin-top: 4vh;
    }

    p {
      font-size: 1rem;
      text-align: center;
      font-family: Montserrat;
      font-weight: 300;

      @media screen and (min-width: 768px) {
        font-size: 1.3vw;
      }
    }

    button {
      background-color: #7a7266;

      width: 8rem;
      height: 3rem;
      border-radius: 0;
      border: #7a7266;

      margin-left: 4vw;

      display: flex;
      align-items: center;
      justify-content: center;

      font-family: Montserrat;

      &:hover {
        transition: 1.25s;
        background-color: #5a493e;
      }

      @media screen and (min-width: 768px) {
        width: 10vw;
        height: 5vh;

        margin-left: 2vw;
        font-size: 1.2vw;
        font-family: Montserrat;
      }
    }
  }
  a {
    text-decoration: none;
  }
`;

export const DivCentered = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hidden-suites {
    text-align: center;
    margin-top: 2rem;
    color: #fff;
    text-decoration: underline;
  }
`;

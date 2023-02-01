import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    height: 100%;
  }

  .card {
    background-color: transparent;
    border: none;

    @media screen and (min-width: 768px) {
      width: 80%;
      height: 70%;
      margin: 0 auto;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .card-body {
    padding: 0;
    @media screen and (min-width: 768px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .card-text {
    text-align: center;
    font-family: Montserrat;
    font-size: 1rem;
    margin: 0;

    color: #fff;

    @media screen and (min-width: 768px) {
      font-size: 2vw;
    }
  }

  .card-title {
    text-align: center;
    font-size: 10vw;
    font-family: Playfair Display;

    color: #fff;

    @media screen and (min-width: 768px) {
      font-size: 5vw;
    }
  }

  button {
    background-color: #7a7266;

    width: 8.45rem;
    height: 3.2rem;
    border-radius: 0;
    border: #7a7266;

    margin-left: 4vw;

    font-family: Montserrat;

    font {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      transition: 1.25s;
      background-color: #5a493e;
    }

    @media screen and (min-width: 768px) {
      width: 20vw;
      height: 5vw;
      margin-left: 2vw;
      font-size: 2vw;
      font-family: Montserrat;
    }
  }

  .container {
    width: 100%;

    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }

    @media screen and (min-width: 1440px) {
      max-width: 100%;
    }
  }
`;

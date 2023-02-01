import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .card {
    background-color: transparent;
    border: none;
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

    width: 6.5rem;
    height: 3rem;
    border-radius: 0;
    border: #7a7266;

    margin-left: 4vw;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: Montserrat;

    &:hover {
      transition: 1.25s;
      background-color: #5a493e;
    }

    @media screen and (min-width: 768px) {
      width: 24vw;
      height: 5.5vh;
      margin-left: 2vw;
      font-size: 2vw;
      font-family: Montserrat;
      padding: 2rem 0;
    }

    @media screen and (min-width: 1440px) {
      height: 9vh;
    }
  }

  .container {
    @media screen and (min-width: 1440px) {
      max-width: 100%;
    }
  }
`;

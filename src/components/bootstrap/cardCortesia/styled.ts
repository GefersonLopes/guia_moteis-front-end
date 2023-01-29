import styled from 'styled-components';

export const Cortesias = styled.ul`
  width: 92vw;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;

  @media screen and (min-width: 768px) {
    height: 70%;
    flex-direction: row;
  }

  li {
    width: 100%;
    height: 32rem;

    @media screen and (min-width: 768px) {
      width: 40vw;
      height: 45vw;
    }

    @media screen and (min-width: 1024px) {
      height: 35vw;
    }

    .card {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: none;

      text-align: center;

      .h5 {
        margin: 1rem 0;
        font-size: 2rem;
        font-family: Playfair;
        font-weight: bold;

        @media screen and (min-width: 768px) {
          font-size: 1.6rem;
        }

        @media screen and (min-width: 2560px) {
          font-size: 3vw;
        }
      }
      p {
        font-size: 1.25rem;
        font-family: Montserrat;
        font-weight: 400;

        @media screen and (min-width: 768px) {
          font-size: 1.4vw;
        }
      }
    }
  }
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 3vh;
  }

  h1 {
    text-align: center;
    color: #fff;
    font-family: Playfair;
    padding-top: 1rem;

    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
    }

    @media screen and (min-width: 2560px) {
      font-size: 4vw;
    }
  }

  a {
    display: flex;
    width: 100vw;
    height: 2rem;
  }

  button {
    background-color: #2a2a2a;

    width: 15rem;
    height: 3rem;
    border-radius: 0;
    border: #2a2a2a;

    margin: 0 auto;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: Montserrat;

    &:hover {
      transition: 1.25s;
      background-color: #fff;
      color: #000;
    }

    @media screen and (min-width: 768px) {
      width: 24vw;
      height: 5.5vh;

      font-size: 2vw;
      font-family: Montserrat;
      padding: 2rem 0;
    }

    @media screen and (min-width: 1440px) {
      height: 9vh;
    }
  }
`;

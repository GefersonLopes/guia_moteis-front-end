import styled from 'styled-components';

export const MainLocalizacao = styled.main`
  width: 100%;
  height: 100%;
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-items: center;

  .card {
    width: 80%;
    height: 160vw;

    margin: 0 auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);

    text-align: center;

    @media screen and (min-width: 375px) {
      height: 135vw;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;

      width: 90vw;
      height: 40vh;
    }

    img {
      object-fit: cover;
      @media screen and (min-width: 768px) {
        width: 50%;
        height: 100%;
      }
    }

    .card-body {
      @media screen and (min-width: 768px) {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }

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
      font-size: 1rem;
      font-family: Montserrat;
      font-weight: 400;

      @media screen and (min-width: 768px) {
        font-size: 1.4vw;
      }
    }

    button {
      background-color: #7a7266;

      width: 8rem;
      height: 3rem;
      border-radius: 0;
      border: #7a7266;

      flex-direction: column;
      align-items: center;
      justify-content: center;

      font-family: Montserrat;

      &:hover {
        transition: 1.25s;
        background-color: #5a493e;
      }

      @media screen and (min-width: 768px) {
        width: 18vw;
        height: 6vh;
        font-size: 2vw;
        font-family: Montserrat;
        padding: 2rem 0;
      }
    }
  }
`;

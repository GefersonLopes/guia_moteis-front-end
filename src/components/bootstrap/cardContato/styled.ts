import styled from 'styled-components';

export const MainContato = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #2a2a2a;

  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 1.2vw;
  }

  .groupLogo {
    width: 80%;
    height: 10rem;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1.35px solid #fff;

    span {
      display: none;
    }

    @media screen and (min-width: 768px) {
      width: 60%;
      height: 80%;

      flex-direction: column;
      border-bottom: none;

      span {
        display: initial;
        color: #fff;
      }
    }

    img {
      width: 70%;
      height: 60%;

      @media screen and (min-width: 768px) {
        width: 15vw;
        height: 40%;
        margin-bottom: 2vh;
      }
    }
  }

  .groupButtons {
    width: 100%;
    height: 20rem;

    margin: 5vh 0;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2vh;

    .a-brand {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .groupNavigate {
    display: none;

    @media screen and (min-width: 768px) {
      display: flex;

      align-items: center;
      justify-content: center;

      width: 90%;
      height: 80%;

      color: #fff;
    }

    .container {
      gap: 2vh;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      justify-items: flex-start;
    }
  }

  button {
    background-color: #7a7266;

    width: 90%;
    height: 4rem;
    border-radius: 0;
    border: 2px solid #7a7266;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: Montserrat;

    &:hover {
      transition: 1.25s;
      background-color: #5a493e;
      border: 2px solid #5a493e;
    }

    @media screen and (min-width: 768px) {
      width: 18vw;
      height: 6vh;
      font-size: 2vw;
      font-family: Montserrat;
      padding: 2rem 0;
    }
  }

  .outline-primary {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
  }

  footer {
    position: absolute;
    bottom: 0;

    height: 20vh;
    width: 100%;

    background-color: #000000;

    text-align: center;
    color: #fff;
    text-transform: uppercase;
    font-family: Playfair;

    @media screen and (min-width: 768px) {
      height: 5vh;
    }

    p {
      margin-top: 2vh;
    }
  }
`;

import styled from 'styled-components';

export const Header = styled.header`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 4rem;

  @media screen and (min-width: 768px) {
    top: 1vh;
    height: 4vh;
  }

  img {
    width: 5rem;
    height: 2.5rem;

    @media screen and (min-width: 768px) {
      width: 15vw;
      height: 6vh;
    }
  }

  .navbar {
    background-color: #2a2a2a;
    justify-content: space-evenly;
    padding: 0.25rem 0;

    @media screen and (min-width: 768px) {
      background-color: transparent;
      padding: 0 1rem;
    }

    .container {
      display: none;

      @media screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
        gap: 1.5vw;
      }

      .navbar-brand {
        color: #fff;
        font-size: 2vw;

        @media screen and (min-width: 768px) {
          font-size: 1.5vw;
        }
      }
    }
  }

  button {
    background-color: #7a7266;

    width: 7rem;
    height: 3rem;
    border-radius: 0;
    border: #7a7266;

    font-family: Montserrat;

    &:hover {
      transition: 1.25s;
      background-color: #5a493e;
    }

    @media screen and (min-width: 768px) {
      background-color: #fff;
      color: #000;

      width: 14vw;
      height: 5.25vw;
      font-size: 2vw;

      padding: 2rem 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  #dropdown-button-drop-up {
    background-color: transparent;
    width: 2rem;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .show {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .dropdown-menu {
    right: -1.5rem;
  }

  .menu_hamburguer {
    width: 1.8rem;
    height: 1rem;

    &::after {
      display: none;
    }
  }
`;

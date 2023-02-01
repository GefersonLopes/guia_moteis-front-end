import styled from 'styled-components';

export const CardImg = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    height: 100%;
    width: 100%;
  }

  h1 {
    color: #fff;
    text-align: center;
    margin: 4vh 0 0 0;
  }

  .ver {
    text-align: center;
    margin: 0 auto;
    color: #fff;
    text-decoration: underline;
    position: absolute;
    bottom: -8vh;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .container {
    position: relative;
    width: 100vw;
    height: 60vh;
    padding: 0;
    @media screen and (min-width: 768px) {
      padding: 0 10vw;
      height: 50vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .gallery-wrapper {
    width: 100%;
    margin: 0 auto;
    /* @media screen and (min-width: 768px) {
      width: 80%;
    } */
  }

  .arrow-left,
  .arrow-right {
    width: 40px;
    height: 40px;
    position: absolute;
    margin: 0;
    font-size: 3rem;
    font-weight: 300;
    z-index: 3;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #fff;
    color: #000;
    opacity: 0.5;

    padding: 0;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }

  .arrow-left {
    left: 2vh;
  }

  .arrow-right {
    right: 2vh;
  }

  .gallery {
    width: 85%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    @media screen and (min-width: 768px) {
      width: 100%;
      overflow: hidden;
      gap: 4vw;

      display: flex;
      align-items: center;
    }
  }

  .item {
    transition: all 400ms ease-in-out;
    opacity: 0.5;

    @media screen and (min-width: 768px) {
      display: initial;
      width: 20vw;
      height: 20vh;

      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .left {
    display: none;
    @media screen and (min-width: 768px) {
      display: initial;
      left: 1vw;
    }
  }

  .right {
    display: none;
    @media screen and (min-width: 768px) {
      display: initial;
      right: 1vw;
    }
  }

  .current-item {
    opacity: 1;
    width: 100%;
    height: 70vh;
    object-fit: cover;
    z-index: 1;

    @media screen and (min-width: 768px) {
      display: initial;
      opacity: 1;
      width: 50vw;
      height: 40vh;
    }
  }

  .center-item {
    @media screen and (min-width: 768px) {
      display: initial;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .gallery-wrapper::-webkit-scrollbar {
    display: none;
  }

  .gallery-wrapper {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .cyan {
    background: cyan;
  }

  .deeppink {
    background: deeppink;
  }

  .turquoise {
    background: turquoise;
  }

  .darkblue {
    background: darkblue;
  }

  .purple {
    background: purple;
  }

  .card {
    width: 85vw;
    height: 16rem;

    display: flex;
    flex-direction: column;

    position: absolute;
    bottom: -20vh;

    opacity: 1;
    z-index: 2;

    @media screen and (min-width: 768px) {
      width: 73.5vw;
      height: 20vh;
      bottom: 0%;
    }

    @media screen and (min-width: 1440px) {
      width: 80vw;
      height: 25vh;
      bottom: -10vh;
    }
  }

  .card-body {
    width: 90%;
    height: 100%;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    background-color: #fff;
    font,
    p,
    .h5 {
      color: #000;
      margin: 0;
    }

    @media screen and (min-width: 768px) {
      width: 55%;
    }

    button {
      width: 80%;
      font,
      p {
        color: #fff;
      }
    }
  }
`;

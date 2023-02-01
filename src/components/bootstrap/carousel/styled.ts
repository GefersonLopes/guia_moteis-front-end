import styled from 'styled-components';

export const CardImg = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    height: 100%;
    width: 100%;
    overflow: hidden;
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
    cursor: pointer;
    @media screen and (min-width: 768px) {
      text-align: 1.25vw;
    }
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
    height: 60px;
    position: absolute;
    margin: 0;
    font-size: 3rem;
    font-weight: 300;
    z-index: 3;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
    opacity: 0.6;

    padding: 0;

    &:hover {
      background-color: #fff;
      color: rgba(0, 0, 0, 0.8);
    }
  }

  .arrow-left {
    left: 3vh;
    @media screen and (min-width: 768px) {
      left: 20vh;
    }
    @media screen and (min-width: 1024px) {
      left: 27vh;
    }
    @media screen and (min-width: 1440px) {
      left: 43vh;
    }
    @media screen and (min-width: 2560px) {
      left: 42vh;
    }
  }

  .arrow-right {
    right: 3vh;
    @media screen and (min-width: 768px) {
      right: 20vh;
    }
    @media screen and (min-width: 1024px) {
      right: 27vh;
    }
    @media screen and (min-width: 1440px) {
      right: 43vh;
    }
    @media screen and (min-width: 2560px) {
      right: 42vh;
    }
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
    opacity: 0.5;

    @media screen and (min-width: 768px) {
      display: initial;
      width: 20vw;
      height: 30vh;

      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .left {
    display: none;

    @media screen and (min-width: 768px) {
      display: initial;
      left: -10vw;
      object-fit: cover;
    }
  }

  .right {
    display: none;
    @media screen and (min-width: 768px) {
      display: initial;
      right: -10vw;
      object-fit: cover;
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
    height: 13rem;

    display: flex;
    flex-direction: column;

    position: absolute;
    bottom: -20vh;

    opacity: 1;
    z-index: 2;

    @media screen and (min-width: 768px) {
      width: 73.5vw;
      height: 15vh;
      bottom: 0%;
    }

    @media screen and (min-width: 1440px) {
      width: 80vw;
    }
  }

  .card-body {
    width: 90%;
    height: 100%;

    margin: 0 auto;
    padding: 0 10%;

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
      flex-direction: row;
      padding: 0 2%;
      .h5 {
        font-size: 2.7vh;
      }
      p {
        font-size: 1.25vh;
        margin-top: 1vh;
      }
    }

    @media screen and (min-width: 1440px) {
      width: 35%;
    }

    button {
      width: 80%;
      font,
      p {
        color: #fff;
      }
      @media screen and (min-width: 768px) {
        width: 10vw;
        height: 4vh;
        font {
          font-size: 0.85vw;
        }
      }
    }
  }
`;

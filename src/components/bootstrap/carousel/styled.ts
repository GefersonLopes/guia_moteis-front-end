import styled from 'styled-components';

export const CardImg = styled.div`
  h1 {
    color: #fff;
    text-align: center;
    margin-bottom: 2vh;
  }

  h1 {
    text-align: center;
    margin: 1em 0;
    font-family: sans-serif;
  }

  .container {
    position: relative;
    width: 100vw;
    height: 60vh;
    padding: 0;
    @media screen and (min-width: 768px) {
      padding: 5rem;
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
    z-index: 1;

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
    left: 0;
  }

  .arrow-right {
    right: 0;
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
    display: none;

    transition: all 600ms ease-in-out;
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
    left: 0;
  }

  .right {
    right: 0;
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

      /* align-items: center; */
    }
  }

  .center-item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    width: 100vw;
    height: 12rem;

    display: flex;
    flex-direction: column;

    /* position: absolute;
    bottom: -5vh; */
    position: absolute;
    bottom: 0%;
    right: 0%;

    opacity: 1;
    z-index: 2;

    @media screen and (min-width: 768px) {
      width: 72vw;
    }
  }

  .card-body {
    width: 85%;
    height: 100%;

    margin: 0 auto;

    background-color: #fff;
    font,
    p,
    .h5 {
      color: #000;
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

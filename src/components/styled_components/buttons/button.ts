import styled from 'styled-components';

export const ButtonHome = styled.button`
  height: 2.7rem;
  width: 13rem;
  border-radius: 12px;
  padding: 10px;
  background-color: #7a7266;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #7a7266;
    font-family: 'Poppins';
  }
  @media screen and (min-width: 768px) {
    width: 20vw;
    height: 8vh;
    font-size: 1.5vw;
  }
`;

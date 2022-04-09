import styled from "styled-components";

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px 15px 0 0;
  height: 80px;
  color: #969696;
  position: fixed;
  bottom: 0;
  background-color: #ffce00;
  max-width: 100vw;
  width: 100%;
  box-sizing: border-box;
`;

export const Container = styled.div`
  text-align: center;
  cursor: pointer;
  color: ${({ color }) => color};
  i {
    font-size: 25px;
  }
`;

export const Title = styled.div`
  font: normal normal 400 15px/24px Helvetica, sans-serif, Arial;
`;

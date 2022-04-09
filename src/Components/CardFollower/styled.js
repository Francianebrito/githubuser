import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding-right: 30px;
  background-color: #292929;
  border-bottom: 2px solid #393939;
  color: #fff;
  height: 13vh;
`;

export const Image = styled.img`
  border: 3px solid #fff;
  border-radius: 50%;
  width: 80px;
  margin-left: 12px;
`;

export const Title = styled.span`
  font: normal normal 500 16px/19px Helvetica, sans-serif, Arial;
  width: 65.5vw;
  padding: 0 10px;
`;

export const Circle = styled.div`
  width: 10px;
  height: 5.5vh;
  border-radius: 0 100px 100px 0;
  background-color: #ffce00;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  max-height: 5.5vh;
`;

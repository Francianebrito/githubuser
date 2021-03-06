import styled from "styled-components";

export const ContainerPage = styled.div`
  background-color: #1f1f1f;
  max-width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  height: 80px;
  background-color: #1f1f1f;
  color: #fff;
  position: fixed;
  z-index: 1;
  h1 {
    font: normal normal bold 17px/24px Helvetica, Arial;
  }
`;

export const ButtonLogout = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5px;
  h3 {
    font-weight: 400;
  }
  img {
    width: 32px;
  }
`;

export const DataUser = styled.div`
  background-color: #292929;
  padding: 108px 0px 48px 0px;
  color: #fff;
  max-height: 226px;
  margin-top: 10px;
  span {
    height: 22.5px;
    display: block;
    padding-left: 26px;
  }
`;

export const ImageUser = styled.img`
  border-radius: 50%;
  border: 3px solid #fff;
  position: relative;
  top: 96px;
  left: 30px;
  width: 150px;
`;

export const NameUser = styled.h1`
  font: normal normal bolder 26px/32px Helvetica;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;
  &::before {
    content: ".";
    padding: 10px 0;
    margin-right: 15px;
    border-radius: 0 70px 70px 0;
    background-color: #ffce00;
    color: #ffce00;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 12px 0px 16px;
  span {
    font: normal normal lighter 17px/24px Helvetica;
  }
`;

export const Number = styled.h3`
  font: normal normal bold 40px/49px Helvetica;
  margin: 0;
`;

export const ContainerBio = styled.div`
  background-color: #292929;
  color: #fff;
  padding: 38px 0px 146px;
  p {
    font: normal normal lighter 18px/24px Arial, sans-serif;
    padding: 26px;
    margin: 0;
  }
`;

export const TitleBio = styled.h2`
  font-size: 26px;
  line-height: 32px;
  text-transform: uppercase;
  margin-top: 10px;
  &::before {
    content: ".";
    padding: 10px 0;
    margin-right: 15px;
    border-radius: 0 70px 70px 0;
    background-color: #ffce00;
    color: #ffce00;
  }
`;

export const ContainerData = styled.section`
  background-color: #525252;
  color: #fff;
  display: flex;
  justify-content: space-around;
`;

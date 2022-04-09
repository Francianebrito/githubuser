import React from "react";
import { ContainerMenu, Container, Title } from "./styled";
import {
  goToFollowers,
  goToFollowing,
  goToRepositories,
  goToStarred,
  goToUser,
} from "../../routes/Coordinator";
import { useHistory } from "react-router";

const Menu = ({ username, currentPage }) => {
  const history = useHistory();

  return (
    <ContainerMenu>
      <Container
        color={currentPage === "home" && "#1f1f1f"}
        onClick={() => {
          goToUser(history, username);
        }}
      >
        <i class="fa-solid fa-house"></i>
        <Title>Home</Title>
      </Container>

      <Container
        color={currentPage === "repositories" && "#1f1f1f"}
        onClick={() => {
          goToRepositories(history, username);
        }}
      >
        <i class="fa-brands fa-github"></i>
        <Title>Repositories</Title>
      </Container>

      <Container
        color={currentPage === "starred" && "#1f1f1f"}
        onClick={() => {
          goToStarred(history, username);
        }}
      >
        <i class="fa-solid fa-star"></i>
        <Title>Starred</Title>
      </Container>

      <Container
        color={currentPage === "followers" && "#1f1f1f"}
        onClick={() => {
          goToFollowers(history, username);
        }}
      >
        <i class="fa-solid fa-user-group"></i>
        <Title>Followers</Title>
      </Container>

      <Container
        color={currentPage === "following" && "#1f1f1f"}
        onClick={() => {
          goToFollowing(history, username);
        }}
      >
        <i class="fa-solid fa-user-group"></i>
        <Title>Following</Title>
      </Container>
    </ContainerMenu>
  );
};

export default Menu;

/* 56 */

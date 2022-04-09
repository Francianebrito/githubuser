import React, { useEffect, useContext } from "react";
import Menu from "../../Components/Menu/Menu";
import save from "../../assets/salvar.png";
import useRequestData from "../../Hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import {
  Header,
  ContainerLogout,
  TitleLogout,
  Title,
  ImageUser,
  ContentPage,
  NameUser,
  Email,
  Address,
  ContainerBio,
  TitleBio,
  Description,
  ContainerData,
  Container,
  Number,
  Name,
  Image,
  Circle,
  ContainerTitle,
} from "./styled";
import { useHistory } from "react-router";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { goToUser } from "../../routes/Coordinator";
import useProtectedPage from "../../Hooks/useProtectedPage";
import { ContainerHeader } from "../../Components/Header/Header";

const FollowerPage = () => {
  useProtectedPage();

  const { states, setters } = useContext(GlobalStateContext);
  const history = useHistory();
  const user = localStorage.getItem("user");

  const dataUser = useRequestData([], `${BASE_URL}users/${user}`);
  dataUser && setters.setUserFollower(dataUser);

  const toSaveUser = () => {
    goToUser(history, user);
  };

  return (
    <div>
      <Header>
        <Title>#{states.userFollower.login}</Title>
        <ContainerLogout onClick={toSaveUser}>
          <TitleLogout>Salvar</TitleLogout>
          <Image src={save} alt="sair" />
        </ContainerLogout>
      </Header>
      <ImageUser
        src={states.userFollower && states.userFollower.avatar_url}
        alt="Imagem usuario"
      />

      <ContentPage>
        <ContainerTitle>
          <Circle />
          <NameUser>{states.userFollower.name}</NameUser>
        </ContainerTitle>

        <Email>{states.userFollower.email}</Email>
        <Address>{states.userFollower.location}</Address>
      </ContentPage>

      <ContainerData>
        <Container>
          <Number>{states.userFollower.followers}</Number>
          <Name>Seguidores</Name>
        </Container>

        <Container>
          <Number>{states.userFollower.following}</Number>
          <Name>Seguindo</Name>
        </Container>

        <Container>
          <Number>{states.userFollower.public_repos}</Number>
          <Name>Repos</Name>
        </Container>
      </ContainerData>

      <ContainerBio>
        <ContainerTitle>
          <Circle />
          <TitleBio>Bio</TitleBio>
        </ContainerTitle>
        <Description>{states.userFollower.bio}</Description>
      </ContainerBio>

      <Menu currentPage={"follower"} username={states.user} />
    </div>
  );
};

export default FollowerPage;

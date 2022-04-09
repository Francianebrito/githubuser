import React, { useContext, useEffect } from "react";
import Logout from "../../assets/logout.png";
import { BASE_URL } from "../../constants/urls";
import {
  Header,
  ContainerLogout,
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
  ContainerPage,
} from "./styled";
import Menu from "../../Components/Menu/Menu";
import { useHistory } from "react-router";
import useProtectedPage from "../../Hooks/useProtectedPage";
import { goToLogin } from "../../routes/Coordinator";
import GlobalStateContext from "../../Global/GlobalStateContext";
import useRequestData from "../../Hooks/useRequestData";

const HomePage = () => {
  useProtectedPage();
  const { states, setters } = useContext(GlobalStateContext);
  const history = useHistory();

  const user = localStorage.getItem("user");
  const dataUser = useRequestData([], `${BASE_URL}users/${user}`);

  useEffect(() => {
    setters.setDataUser(dataUser);
  }, [dataUser]);

  const logout = () => {
    setters.setUser("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    goToLogin(history);
  };

  return (
    <ContainerPage>
      <Header>
        <h1>#{states.dataUser.login}</h1>

        <ContainerLogout onClick={logout}>
          <h3>Logout</h3>
          <img src={Logout} alt="logout" />
        </ContainerLogout>
      </Header>
      <ImageUser src={states.dataUser.avatar_url} alt="user" />

      <ContentPage>
        <NameUser>{states.dataUser.name}</NameUser>

        <Email>{states.dataUser.email}</Email>
        <Address>{states.dataUser.location}</Address>
      </ContentPage>

      <ContainerData>
        <Container>
          <Number>{states.dataUser.followers}</Number>
          <Name>Followers</Name>
        </Container>

        <Container>
          <Number>{states.dataUser.following}</Number>
          <Name>Following</Name>
        </Container>

        <Container>
          <Number>{states.dataUser.public_repos}</Number>
          <Name>Repositories</Name>
        </Container>
      </ContainerData>

      <ContainerBio>
        <TitleBio>Bio</TitleBio>
        <Description>{states.dataUser.bio}</Description>
      </ContainerBio>

      <Menu username={states.user} currentPage={"home"} />
    </ContainerPage>
  );
};

export default HomePage;

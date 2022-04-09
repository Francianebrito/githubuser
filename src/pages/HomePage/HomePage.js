import React, { useContext, useEffect } from "react";
import Logout from "../../assets/logout.png";
import { BASE_URL } from "../../constants/urls";
import {
  Header,
  ButtonLogout,
  ImageUser,
  DataUser,
  NameUser,
  ContainerBio,
  TitleBio,
  ContainerData,
  Container,
  Number,
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

        <ButtonLogout onClick={logout}>
          <h3>Logout</h3>
          <img src={Logout} alt="logout" />
        </ButtonLogout>
      </Header>
      <ImageUser src={states.dataUser.avatar_url} alt="user" />

      <DataUser>
        <NameUser>{states.dataUser.name}</NameUser>
        <span>{states.dataUser.email}</span>
        <span>{states.dataUser.location}</span>
      </DataUser>

      <ContainerData>
        <Container>
          <Number>{states.dataUser.followers}</Number>
          <span>Followers</span>
        </Container>

        <Container>
          <Number>{states.dataUser.following}</Number>
          <span>Following</span>
        </Container>

        <Container>
          <Number>{states.dataUser.public_repos}</Number>
          <span>Repositories</span>
        </Container>
      </ContainerData>

      <ContainerBio>
        <TitleBio>Bio</TitleBio>
        <p>{states.dataUser.bio}</p>
      </ContainerBio>

      <Menu username={states.user} currentPage={"home"} />
    </ContainerPage>
  );
};

export default HomePage;

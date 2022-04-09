import React, { useContext } from "react";
import { ContainerPage, ContainerCards } from "./styled";
import { BASE_URL } from "../../constants/urls";
import CardFollower from "../../Components/CardFollower/CardFollower";
import Menu from "../../Components/Menu/Menu";
import useProtectedPage from "../../Hooks/useProtectedPage";
import GlobalStateContext from "../../Global/GlobalStateContext";
import Header from "../../Components/Header/Header";
import useRequestData from "../../Hooks/useRequestData";

const FollowersPage = () => {
  useProtectedPage();
  const { states, setters } = useContext(GlobalStateContext);
  const user = localStorage.getItem("user");
  const dataFollowers = useRequestData(
    [],
    `${BASE_URL}users/${user}/followers`
  );
  dataFollowers && setters.setFollowers(dataFollowers);

  return (
    <ContainerPage>
      <Header title={`${states.dataUser.followers} followers`} />
      <ContainerCards>
        {states.followers.map((follower) => (
          <CardFollower follow={follower} />
        ))}
      </ContainerCards>
      <Menu username={states.user} currentPage={"followers"} />
    </ContainerPage>
  );
};

export default FollowersPage;

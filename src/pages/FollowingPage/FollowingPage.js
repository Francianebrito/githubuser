import React, { useContext } from "react";
import CardFollower from "../../Components/CardFollower/CardFollower";
import Menu from "../../Components/Menu/Menu";
import useProtectedPage from "../../Hooks/useProtectedPage";
import GlobalStateContext from "../../Global/GlobalStateContext";
import useRequestData from "../../Hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import Header from "../../Components/Header/Header";
import { ContainerCards, ContainerPage } from "./styled";

const FollowingPage = () => {
  useProtectedPage();
  const { states, setters } = useContext(GlobalStateContext);
  const user = localStorage.getItem("user");
  const dataFollowing = useRequestData(
    [],
    `${BASE_URL}users/${user}/following`
  );
  dataFollowing && setters.setFollowing(dataFollowing);

  return (
    <ContainerPage>
      <Header title={`${states.dataUser.following} following`} />

      <ContainerCards>
        {states.following.map((follow) => (
          <CardFollower follow={follow} />
        ))}
      </ContainerCards>

      <Menu currentPage={"following"} username={states.user} />
    </ContainerPage>
  );
};

export default FollowingPage;

import React, { useContext } from "react";
import { BASE_URL } from "../../constants/urls";
import CardRepos from "../../Components/CardRepos/CardRepos";
import Menu from "../../Components/Menu/Menu";
import { ContainerCards, ContainerPage } from "./styled";
import useProtectedPage from "../../Hooks/useProtectedPage";
import useRequestData from "../../Hooks/useRequestData";
import Header from "../../Components/Header/Header";
import GlobalStateContext from "../../Global/GlobalStateContext";

const RepositoriesPage = () => {
  useProtectedPage();
  const { states } = useContext(GlobalStateContext);
  const user = localStorage.getItem("user");
  const repos = useRequestData([], `${BASE_URL}users/${user}/repos`);

  return (
    <ContainerPage>
      <Header title={`${states.dataUser.public_repos} repositories`} />

      <ContainerCards>
        {repos.map((repo) => (
          <CardRepos repo={repo} />
        ))}
      </ContainerCards>

      <Menu username={states.user} currentPage={"repositories"} />
    </ContainerPage>
  );
};

export default RepositoriesPage;

/* 57 */

import React from "react";
import { ContainerCard, Image, Title, Circle, ContainerTitle } from "./styled";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { goToFollower } from "../../routes/Coordinator";
import { useHistory } from "react-router";

const CardFollower = ({ follow }) => {
  const history = useHistory();

  const saveUser = () => {
    const user = localStorage.setItem("user", follow.login);
    goToFollower(history, user);
  };

  return (
    <ContainerCard /* onClick={saveUser} */>
      <ContainerTitle>
        <Circle />

        <Image src={follow.avatar_url} alt="user image" />
      </ContainerTitle>
      <Title>#{follow.login}</Title>
      <ArrowForwardIcon />
    </ContainerCard>
  );
};

export default CardFollower;

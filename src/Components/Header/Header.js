import React from "react";
import { ContainerHeader, Title } from "./styled";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { gotoBack } from "../../routes/Coordinator";

import { useHistory } from "react-router";

const Header = ({ title }) => {
  const history = useHistory();

  return (
    <ContainerHeader>
      <ArrowBackIcon fontSize={"large"} onClick={() => gotoBack(history)} />
      <Title>{title}</Title>
    </ContainerHeader>
  );
};

export default Header;

/* 56 */

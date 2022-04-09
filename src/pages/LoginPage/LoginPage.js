import React, { useEffect, useContext, useState } from "react";
import Logo from "../../assets/github-login.png";
import {
  ContainerPage,
  Image,
  Input,
  Button,
  Text,
  TextError,
  ContainerInput,
} from "./styled";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useHistory } from "react-router";
import { goToUser } from "../../routes/Coordinator";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import GlobalStateContext from "../../Global/GlobalStateContext";
const LoginPage = () => {
  const history = useHistory();
  const { states, setters } = useContext(GlobalStateContext);
  const [error, setError] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    token !== null && goToUser(history);
  }, [history]);

  const onChange = (e) => {
    setters.setUser(e.target.value);
    localStorage.setItem("user", e.target.value);
  };

  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = () => {
    setError(false);
    const user = localStorage.getItem("user");
    axios
      .get(`${BASE_URL}users/${user}`)
      .then((res) => {
        if (states.user !== "") {
          localStorage.setItem("token", res.headers.etag);
          goToUser(history, states.user);
        }
      })
      .catch(() => states.user !== "" && setError(true));
  };

  const onSubmitForm = () => {
    states.user !== "" ? getDataUser() : setters.setError(true);
  };

  return (
    <ContainerPage>
      <Image src={Logo} alt="Logo" />
      <ContainerInput>
        <Input placeholder="@github-user" name="user" onChange={onChange} />
      </ContainerInput>
      {error && <TextError>User not found. Try again!</TextError>}
      <Button
        type="submit"
        onClick={() => {
          onSubmitForm();
        }}
      >
        <Text>Login</Text>
        <ArrowForwardIcon />
      </Button>
    </ContainerPage>
  );
};

export default LoginPage;

/* 81 */

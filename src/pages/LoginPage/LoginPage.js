import React, { useEffect, useContext, useState } from "react";
import Logo from "../../assets/logo.png";
import { ContainerPage, Image, Input, Button, TextError } from "./styled";
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
    localStorage.getItem("token") && goToUser(history);
  }, [history]);

  const onChange = (e) => {
    setters.setUser(e.target.value);
    localStorage.setItem("user", e.target.value);
  };

  const getDataUser = () => {
    setError(false);

    const user = localStorage.getItem("user");
    axios
      .get(`${BASE_URL}users/${user}`)
      .then((res) => {
        localStorage.setItem("token", res.headers.etag);
        goToUser(history, states.user);
      })
      .catch(() => states.user && setError(true));
  };

  const onSubmitForm = () => {
    states.user && getDataUser();
  };

  return (
    <ContainerPage>
      <Image src={Logo} alt="Logo" />
      <Input placeholder="@github-user" name="user" onChange={onChange} />

      {error && <TextError>User not found. Try again!</TextError>}

      <Button type="submit" onClick={onSubmitForm}>
        <span>Login</span>
        <i className="fa-solid fa-arrow-right" />
      </Button>
    </ContainerPage>
  );
};

export default LoginPage;

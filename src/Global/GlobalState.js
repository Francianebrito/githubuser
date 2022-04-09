import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = ({ children }) => {
  const [error, setError] = useState(false);
  const [user, setUser] = useState("");
  const [dataUser, setDataUser] = useState([]);
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [userFollower, setUserFollower] = useState("");

  const states = { error, user, dataUser, following, followers, userFollower };
  const setters = {
    setError,
    setUser,
    setDataUser,
    setFollowing,
    setFollowers,
    setUserFollower,
  };

  const data = { states, setters };

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;

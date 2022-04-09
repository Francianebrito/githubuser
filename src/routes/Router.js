import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
import RepositoriesPage from "../pages/RepositoriesPage/RepositoriesPage";
import FollowersPage from "../pages/FollowersPage/FollowersPage";
import FollowingPage from "../pages/FollowingPage/FollowingPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FollowerPage from "../pages/FollowerPage/FollowerPage";
import StarredPage from "../pages/StarredPage/StarredPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/repositories">
          <RepositoriesPage />
        </Route>

        <Route exact path="/starred">
          <StarredPage />
        </Route>

        <Route exact path="/followers">
          <FollowersPage />
        </Route>

        <Route exact path="/following">
          <FollowingPage />
        </Route>

        <Route exact path="/follower/:user">
          <FollowerPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

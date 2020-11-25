import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {LoginPage, SignUpPage} from "./pages/Auth";

export const AppRoutes = () => {
    return (
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignUpPage} />
          <Redirect to="/login" />
        </Switch>
      );
}
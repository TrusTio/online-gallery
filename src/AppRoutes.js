import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage, SignUpPage } from "./pages/Auth";
import { GalleriesPage, GalleryContents } from "pages";
import { useAuth } from "contexts/AuthContext";

export const AppRoutes = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <Switch>
        <Route path="/galleries" exact component={GalleriesPage} />
        <Route path="/gallery" component={GalleryContents} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
};

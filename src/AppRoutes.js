import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage, SignUpPage } from "./pages/Auth";
import { GalleriesPage, GalleryContents } from "pages";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={SignUpPage} />
      <Route path="/galleries" exact component={GalleriesPage} />
      <Route path="/gallery" component={GalleryContents} />
      <Redirect to="/" />
    </Switch>
  );
};

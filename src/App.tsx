import * as React from "react";
import { Redirect, Route } from "react-router-dom";
import "./index.css";
import { TabBarPage } from "./TabBarPage";

const renderDefault = () => {
  return <Redirect to="demand" />;
};

export default () => {
  return (
    <main>
      <Route path="/:department" component={TabBarPage} />
      <Route exact={true} path={"/"} render={renderDefault} />
    </main>
  );
};

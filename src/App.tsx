import * as React from "react";
import { Route } from "react-router-dom";
import "./index.css";
import { TabBarPage } from "./TabBarPage";

export default () => {
  return (
    <main>
      <Route path="/:department" component={TabBarPage} />
    </main>
  );
};

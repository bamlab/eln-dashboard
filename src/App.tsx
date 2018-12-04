import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DashboardTabBar } from "./components";
import { TabBar } from "./components/TabBar.component";
import "./index.css";

export default () => {
  const renderDefault = ({ match }: { match: any }) => {
    return (
      <React.Fragment>
        <DashboardTabBar />
        <Redirect to={"/china/dc/summary_current_forecast"} />
      </React.Fragment>
    );
  };
  const renderPage = ({ match }: { match: any }) => {
    return (
      <React.Fragment>
        <DashboardTabBar />
      </React.Fragment>
    );
  };

  return (
    <main>
      <TabBar />
      <Switch>
        <Route exact={true} path="/" render={renderDefault} />
        <Route path="/:page/:category" render={renderPage} />
      </Switch>
    </main>
  );
};

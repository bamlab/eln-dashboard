import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DashboardTabBar } from "./components";
import { TabBar } from "./components/TabBar.component";
import "./index.css";

export default () => {
  const renderTabBar = (prefixPath: string) => (props: any) => {
    return (
      <React.Fragment>
        <DashboardTabBar prefixPath={prefixPath} />
        <Redirect to="/china/dc/kpis" />
      </React.Fragment>
    );
  };

  return (
    <main>
      <TabBar />
      <Switch>
        <Route exact={true} path="/" render={renderTabBar("/china/dc")} />
        <Route path="/china/di" render={renderTabBar("/china/di")} />
        <Route path="/china/dc" render={renderTabBar("/china/dc")} />
      </Switch>
    </main>
  );
};

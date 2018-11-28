import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { TabBar2 } from "./components";
import { TabBar1 } from "./components/Header.component";
import "./index.css";

export default () => {
  const renderTabBar = (prefixPath: string) => (props: any) => {
    return (
      <React.Fragment>
        <TabBar2 prefixPath={prefixPath} />
        <Redirect to="/china/dc/kpis" />
      </React.Fragment>
    );
  };

  return (
    <main>
      <TabBar1 />
      <Switch>
        <Route exact={true} path="/" render={renderTabBar("/china/dc")} />
        <Route path="/china/di" render={renderTabBar("/china/di")} />
        <Route path="/china/dc" render={renderTabBar("/china/dc")} />
      </Switch>
    </main>
  );
};

import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/Header.component";
import "./index.css";
import { ChinaDC, ChinaDI } from "./pages";

export default () => (
  <main>
    <Header />
    <Switch>
      <Route exact={true} path="/" component={ChinaDI} />
      <Route path="/china/di" component={ChinaDI} />
      <Route path="/china/dc" component={ChinaDC} />
    </Switch>
  </main>
);

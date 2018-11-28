import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import * as React from "react";
import { withRouter } from "react-router-dom";
import { Selector } from "./Selector.component";

const styles = {
  root: {
    flexGrow: 1
  }
};

const TabBarComponent = withRouter((props: any) => {
  const routes = [
    { name: "China DC", path: "/china/dc", parent: "China" },
    { name: "China DI", path: "/china/di", parent: "China" },
    {
      name: "International Label - DI",
      path: "/china/di",
      parent: "International"
    },
    {
      name: "International Label - EIB",
      path: "/china/di",
      parent: "International"
    },
    {
      name: "International Label - IL",
      path: "/china/di",
      parent: "International"
    }
  ];
  const goToPage = (selected: string) => {
    const routeSelected = routes.filter(route => route.name === selected)[0];
    props.history.push(routeSelected.path);
  };
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Selector
            onChange={goToPage}
            valueList={routes
              .filter(route => route.parent === "China")
              .map(route => route.name)}
            defaultDisplayedValue={
              routes.filter(route => route.parent === "China")[0].name
            }
          />
          <Selector
            onChange={goToPage}
            valueList={routes
              .filter(route => route.parent === "International")
              .map(route => route.name)}
            defaultDisplayedValue={
              routes.filter(route => route.parent === "International")[0].name
            }
          />
        </Toolbar>
      </AppBar>
    </div>
  );
});

export const TabBar = withStyles(styles)(TabBarComponent);

import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";
import { Selector } from "./Selector.component";

const styles = {
  root: {
    flexGrow: 1
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 40
  },
  focused: {
    fontWeight: 700,
    color: "white"
  },
  notFocused: {
    color: "white",
    opacity: 0.6,
    fontWeight: 700
  }
};

type IPropsType = RouteComponentProps<any> & {
  classes: { [key: string]: string };
};

class TabBarComponent extends React.Component<IPropsType> {
  public state = {
    currentFocusedTab: this.props.location.pathname.includes("/international/")
      ? "international"
      : "china"
  };
  public render() {
    const routes = [
      { name: "China DC", path: "/china/dc", parent: "China" },
      { name: "China DI", path: "/china/di", parent: "China" },
      {
        name: "International Label - DI",
        path: "/international/di",
        parent: "International"
      },
      {
        name: "International Label - EIB",
        path: "/international/eib",
        parent: "International"
      },
      {
        name: "International Label - IL",
        path: "/international/il",
        parent: "International"
      }
    ];
    const goToPage = (selected: string) => {
      // find in wich page we currently are in order to redirect to this page.
      const pathArray = this.props.location.pathname.split("/");
      pathArray.splice(0, 3); // remove '/', 'china || international' and 'dc || di || eib || il'
      const myCurrentSubPath = pathArray.join("/");

      const routeSelected = routes.filter(route => route.name === selected)[0];
      this.props.history.push(routeSelected.path + "/" + myCurrentSubPath);
      this.setState({
        currentFocusedTab: routeSelected.parent
      });
    };
    const { classes } = this.props;
    console.log(this.props);
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <img
              src={require("../assets/logo.png")}
              height={40}
              width={40}
              className={classes.logo}
            />
            <Selector
              onChange={goToPage}
              valueList={routes
                .filter(route => route.parent === "China")
                .map(route => route.name)}
              defaultDisplayedValue={
                routes.filter(route => route.parent === "China")[0].name
              }
              style={
                this.state.currentFocusedTab === "china"
                  ? styles.focused
                  : styles.notFocused
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
              style={
                this.state.currentFocusedTab === "international"
                  ? styles.focused
                  : styles.notFocused
              }
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export const TabBar = withStyles(styles)(withRouter(TabBarComponent));

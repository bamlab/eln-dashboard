import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyleRules, withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";
import { Selector } from "./Selector.component";

const styles: StyleRules = {
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
    color: "white",
    textTransform: "none"
  },
  notFocused: {
    color: "white",
    opacity: 0.6,
    fontWeight: 700,
    textTransform: "none"
  }
};

type IPropsType = RouteComponentProps<any> & {
  classes: { [key: string]: string };
};

class TabBarComponent extends React.Component<IPropsType> {
  public state = {
    currentFocusedTab: this.props.location.pathname.split("/").includes("china")
      ? "China"
      : this.props.location.pathname.split("/").includes("eib")
      ? "International Label - EIB"
      : this.props.location.pathname.split("/").includes("di")
      ? "International Label - DI"
      : "International Label - IL"
  };

  public goToChina = () => {
    const { match } = this.props;
    // find in wich page we currently are in order to redirect to this page.
    const pathArray = this.props.location.pathname.split("/");
    pathArray.splice(0, 4); // remove '/', 'china || international' and 'dc || di || eib || il'
    const myCurrentSubPath = pathArray.join("/");
    this.props.history.push(match.url + "/china/all/" + myCurrentSubPath);
    this.setState({
      currentFocusedTab: "China"
    });
  };

  public render() {
    const routes = [
      { name: "China", path: "/china/all", parent: "China" },
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
      const { match } = this.props;
      // find in wich page we currently are in order to redirect to this page.
      const pathArray = this.props.location.pathname.split("/");
      pathArray.splice(0, 4); // remove '/', 'china || international' and 'dc || di || eib || il'
      const myCurrentSubPath = pathArray.join("/");

      const routeSelected = routes.filter(route => route.name === selected)[0];
      this.props.history.push(
        match.url + routeSelected.path + "/" + myCurrentSubPath
      );
      this.setState({
        currentFocusedTab: routeSelected.name
      });
    };
    const { classes } = this.props;
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
            <Button
              color="inherit"
              onClick={this.goToChina}
              style={
                this.state.currentFocusedTab === "China"
                  ? styles.focused
                  : styles.notFocused
              }
            >
              China
            </Button>
            <Selector
              onChange={goToPage}
              valueList={routes
                .filter(route => route.parent === "International")
                .map(route => route.name)}
              defaultDisplayedValue={
                (
                  routes.filter(
                    route =>
                      route.parent === "International" &&
                      route.name === this.state.currentFocusedTab
                  )[0] || { name: "International Label - DI" }
                ).name
              }
              style={
                this.state.currentFocusedTab !== "China"
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

export const TabBarDemand = withStyles(styles)(withRouter(TabBarComponent));

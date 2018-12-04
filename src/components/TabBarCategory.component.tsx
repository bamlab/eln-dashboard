import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
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

const routes = [
  { name: "IMF - Total", path: "/imf/total", parent: "imf" },
  { name: "IMF - Goat", path: "/imf/goat", parent: "imf" },
  { name: "IMF - Organic", path: "/imf/organic", parent: "imf" }
];

class TabBarComponent extends React.Component<IPropsType> {
  public state = {
    currentFocusedTab: this.props.location.pathname.includes(
      "/tailored_nutrition/"
    )
      ? "tailored"
      : "imf"
  };
  public goToPage = (selected: string) => {
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
      currentFocusedTab: routeSelected.parent
    });
  };
  public goToTailored = () => {
    const { match } = this.props;
    // find in wich page we currently are in order to redirect to this page.
    const pathArray = this.props.location.pathname.split("/");
    pathArray.splice(0, 4); // remove '/', 'china || international' and 'dc || di || eib || il'
    const myCurrentSubPath = pathArray.join("/");
    this.props.history.push(
      match.url + "/tailored_nutrition/regular/" + myCurrentSubPath
    );
    this.setState({
      currentFocusedTab: "tailored"
    });
  };
  public render() {
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
            <Selector
              onChange={this.goToPage}
              valueList={routes
                .filter(route => route.parent === "imf")
                .map(route => route.name)}
              defaultDisplayedValue={
                routes.filter(route => route.parent === "imf")[0].name
              }
              style={
                this.state.currentFocusedTab === "imf"
                  ? styles.focused
                  : styles.notFocused
              }
            />
            <Button
              color="inherit"
              onClick={this.goToTailored}
              style={
                this.state.currentFocusedTab === "tailored"
                  ? styles.focused
                  : styles.notFocused
              }
            >
              Tailored Nutrition - Regular
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export const TabBarCategory = withStyles(styles)(withRouter(TabBarComponent));

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { colors } from "../theme";
import { renderPage } from "./Routes";
import { Selector } from "./Selector.component";

const styles = {
  focused: {
    fontWeight: 700,
    color: colors.mainColor
  },
  notFocused: {
    color: colors.mainFontColor,
    opacity: 0.6,
    fontWeight: 700
  }
};

type IPropsType = RouteComponentProps<any> & {
  classes: { [key: string]: string };
};

class DashboardTabBarComponent extends React.Component<IPropsType> {
  public state = {
    currentFocusedTab: this.props.location.pathname.split("/").pop()
  };
  public onSelectChange = (value: string) => {
    const hashRoute = {
      "SUMMARY - CURRENT FORECAST": "summary_current_forecast",
      "SUMMARY - DEFINITION": "summary_definition",
      "SUMMARY - KEY ASSUMPTIONS": "summary_key_assumptions"
    };
    this.goToTab(hashRoute[value])();
  };

  public goToTab = (tab: string) => () => {
    const { match } = this.props;
    this.setState({ currentFocusedTab: tab });
    this.props.history.push(`${match.url}/${tab}`);
  };

  public renderDefault = () => {
    const { match } = this.props;
    return <Redirect to={`${match.url}/summary_current_forecast`} />;
  };
  public render() {
    const { classes, match } = this.props;
    return (
      <div>
        <AppBar position="static" style={{ backgroundColor: "white" }}>
          <Toolbar>
            <Button
              onClick={this.goToTab("previous_forecasts")}
              classes={{
                root:
                  this.state.currentFocusedTab === "previous_forecasts"
                    ? classes.focused
                    : classes.notFocused
              }}
            >
              PREVIOUS FORECASTS
            </Button>
            <Button
              onClick={this.goToTab("kpis")}
              classes={{
                root:
                  this.state.currentFocusedTab === "kpis"
                    ? classes.focused
                    : classes.notFocused
              }}
            >
              KPIS
            </Button>
            <Selector
              onChange={this.onSelectChange}
              valueList={[
                "SUMMARY - CURRENT FORECAST",
                "SUMMARY - DEFINITION",
                "SUMMARY - KEY ASSUMPTIONS"
              ]}
              defaultDisplayedValue="SUMMARY - CURRENT FORECAST"
              style={
                this.state.currentFocusedTab ===
                ("summary_current_forecast" ||
                  "summary_definition" ||
                  "summary_key_assumptions")
                  ? styles.focused
                  : styles.notFocused
              }
              iconColor="blue"
            />
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact={true} path={`${match.url}/:tab`} render={renderPage} />
          <Route
            exact={true}
            path={`${match.url}`}
            render={this.renderDefault}
          />
        </Switch>
      </div>
    );
  }
}

export const DashboardTabBar = withStyles(styles)(
  withRouter(DashboardTabBarComponent)
);

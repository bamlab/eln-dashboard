import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { IconButton, SvgIcon } from "@material-ui/core";
import { renderPage } from "../navigation/Navigation";
import { colors } from "../theme";
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

  public onCountryChange = (value: string) => {
    this.setState({ country: value });
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
          <Toolbar style={{ justifyContent: "space-between" }}>
            <div>
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
            </div>
            <div>
              <IconButton
                style={{
                  marginLeft: 16,
                  boxShadow: "0 0 10px 0 rgba(0,0,0,0.15)",
                  color: "white"
                }}
              >
                <SvgIcon
                  width={24}
                  height={24}
                  fill="none"
                  stroke={colors.mainColor}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </SvgIcon>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact={true} path={`${match.path}/:tab`} render={renderPage} />
          <Route path={`${match.path}`} render={this.renderDefault} />
        </Switch>
      </div>
    );
  }
}

export const DashboardTabBarDemand = withStyles(styles)(
  withRouter(DashboardTabBarComponent)
);

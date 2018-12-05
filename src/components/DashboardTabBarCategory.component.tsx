import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { renderPage } from "../navigation/Navigation";
import { colors } from "../theme";
import { Selector } from "./Selector.component";
import { SelectorOutlined } from "./SelectorOutlined.component";

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

interface IState {
  currentFocusedTab: string;
  country: string;
}
const hashRoute = {
  "SUMMARY OVERVIEW": "summary_overview",
  "SUMMARY ACTUAL": "summary_actual",
  "SUMMARY FORECAST FUTURE": "summary_forecast_future",
  "SUMMARY INPUT PAST & FUTURE": "summary_input_past_and_future",
  "SUMMARY FORECAST PAST": "summary_forecast_past",
  "SUMMARY DEFINITIONS": "summary_definitions",
  "SUMMARY - KEY ASSUMPTIONS": "summary_key_assumptions"
};

const countryList = ["Total", "ANZ", "NL", "DE", "UK"];

class DashboardTabBarComponent extends React.Component<IPropsType, IState> {
  public state = {
    currentFocusedTab: this.props.location.pathname.split("/").pop() || "",
    country: "Total"
  };
  public onSelectChange = (value: string) => {
    this.goToTab(hashRoute[value])();
  };
  public onCountryChange = (value: string) => {
    this.setState({ country: value });
  };

  public goToTab = (tab: string) => () => {
    const { match } = this.props;
    this.props.history.push(`${match.url}/${tab}`);
    this.setState({ currentFocusedTab: tab });
  };

  public renderDefault = () => {
    const { match } = this.props;
    return <Redirect to={`${match.url}/kpis`} />;
  };
  public render() {
    const { classes, match } = this.props;
    return (
      <div>
        <AppBar position="static" style={{ backgroundColor: "white" }}>
          <Toolbar>
            <SelectorOutlined
              onChange={this.onCountryChange}
              valueList={countryList}
              defaultDisplayedValue="Total"
              iconColor="blue"
            />
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
              valueList={Object.keys(hashRoute)}
              defaultDisplayedValue="SUMMARY OVERVIEW"
              style={
                [
                  "summary_overview",
                  "summary_actual",
                  "summary_forecast_future",
                  "summary_input_and_future",
                  "summary_forecast_past",
                  "summary_definitions",
                  "summary_key_assumptions"
                ].includes(this.state.currentFocusedTab)
                  ? styles.focused
                  : styles.notFocused
              }
              iconColor="blue"
            />
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

export const DashboardTabBarCategory = withStyles(styles)(
  withRouter(DashboardTabBarComponent)
);
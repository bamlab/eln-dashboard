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

const countryList = ["Total", "ANZ", "NL", "DE", "UK"];

class DashboardTabBarComponent extends React.Component<IPropsType> {
  public state = {
    currentFocusedTab: this.props.location.pathname.split("/").pop(),
    country: "Total"
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
          <Toolbar>
            {this.props.match.params.zona !== "china" && (
              <SelectorOutlined
                onChange={this.onCountryChange}
                valueList={countryList}
                defaultDisplayedValue={countryList[0]}
                iconColor="blue"
              />
            )}
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

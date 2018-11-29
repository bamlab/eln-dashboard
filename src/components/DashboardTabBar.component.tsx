import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { KPIS, PreviousForecasts } from "../pages";
import { colors } from "../theme";
import { Selector } from "./Selector.component";

const styles = {
  focused: {
    fontWeight: 700,
    color: colors.mainColor,
    fill: colors.mainFontColor
  },
  notFocused: {
    color: colors.mainFontColor,
    opacity: 0.6,
    fontWeight: 700,
    fill: colors.mainFontColor
  }
};

type IPropsType = RouteComponentProps<any> & {
  classes: { [key: string]: string };
  prefixPath: string;
};

class DashboardTabBarComponent extends React.Component<IPropsType> {
  public state = {
    currentFocusedTab: "KPIS"
  };
  public onSelectChange = () => this.setState({ currentFocusedTab: "Summary" });
  public goToKPIS = () => {
    this.setState({ currentFocusedTab: "KPIS" });
    this.props.history.push(`${this.props.prefixPath}/kpis`);
  };
  public goToPreviousForecasts = () => {
    this.setState({ currentFocusedTab: "Previous Forecasts" });
    this.props.history.push(`${this.props.prefixPath}/previous_forecasts`);
  };
  public renderKPIS = () => <KPIS />;
  public renderPreviousForecasts = () => <PreviousForecasts />;
  public renderDefault = () => (
    <Redirect to={`${this.props.prefixPath}/kpis`} />
  );
  public render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" style={{ backgroundColor: "white" }}>
          <Toolbar>
            <Button
              onClick={this.goToPreviousForecasts}
              classes={{
                root:
                  this.state.currentFocusedTab === "Previous Forecasts"
                    ? classes.focused
                    : classes.notFocused
              }}
            >
              PREVIOUS FORECASTS
            </Button>
            <Button
              onClick={this.goToKPIS}
              classes={{
                root:
                  this.state.currentFocusedTab === "KPIS"
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
                this.state.currentFocusedTab === "Summary"
                  ? styles.focused
                  : styles.notFocused
              }
              iconColor="blue"
            />
          </Toolbar>
        </AppBar>
        <Switch>
          <Route
            exact={true}
            path={`${this.props.prefixPath}`}
            render={this.renderDefault}
          />
          <Route
            path={`${this.props.prefixPath}/kpis`}
            render={this.renderKPIS}
          />
          <Route
            path={`${this.props.prefixPath}/previous_forecasts`}
            render={this.renderPreviousForecasts}
          />
        </Switch>
      </div>
    );
  }
}

export const DashboardTabBar = withStyles(styles)(
  withRouter(DashboardTabBarComponent)
);

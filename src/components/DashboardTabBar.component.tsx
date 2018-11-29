import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { SummaryDefinition, SummaryKeyAssumption } from "../pages";
import {
  KPISChinaDC,
  KPISChinaDI,
  KPISInternationalDI,
  KPISInternationalEIB,
  KPISInternationalIL
} from "../pages/KPIS/";
import {
  PreviousForecastsChinaDC,
  PreviousForecastsChinaDI,
  PreviousForecastsInternationalDI,
  PreviousForecastsInternationalEIB,
  PreviousForecastsInternationalIL
} from "../pages/PreviousForecasts/";
import {
  SummaryCurrentForecastChinaDC,
  SummaryCurrentForecastChinaDI,
  SummaryCurrentForecastInternationalDI,
  SummaryCurrentForecastInternationalEIB,
  SummaryCurrentForecastInternationalIL
} from "../pages/SummaryCurrentForecast";

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
  prefixPath: string;
};

class DashboardTabBarComponent extends React.Component<IPropsType> {
  public state = {
    currentFocusedTab: "Summary"
  };
  public onSelectChange = (value: string) => {
    this.setState({ currentFocusedTab: "Summary" });
    const hashRoute = {
      "SUMMARY - CURRENT FORECAST": "summary_current_forecast",
      "SUMMARY - DEFINITION": "summary_definition",
      "SUMMARY - KEY ASSUMPTIONS": "summary_key_assumptions"
    };
    this.props.history.push(`${this.props.prefixPath}/${hashRoute[value]}`);
  };
  public goToKPIS = () => {
    this.setState({ currentFocusedTab: "KPIS" });
    this.props.history.push(`${this.props.prefixPath}/kpis`);
  };
  public goToPreviousForecasts = () => {
    this.setState({ currentFocusedTab: "Previous Forecasts" });
    this.props.history.push(`${this.props.prefixPath}/previous_forecasts`);
  };
  public renderKPIS = () => {
    if (this.props.prefixPath === "/china/dc") {
      return <KPISChinaDC />;
    }
    if (this.props.prefixPath === "/china/di") {
      return <KPISChinaDI />;
    }
    if (this.props.prefixPath === "/international/eib") {
      return <KPISInternationalEIB />;
    }
    if (this.props.prefixPath === "/international/di") {
      return <KPISInternationalDI />;
    }
    if (this.props.prefixPath === "/international/il") {
      return <KPISInternationalIL />;
    }
    return <KPISChinaDI />;
  };
  public renderPreviousForecasts = () => {
    if (this.props.prefixPath === "/china/dc") {
      return <PreviousForecastsChinaDC />;
    }
    if (this.props.prefixPath === "/china/di") {
      return <PreviousForecastsChinaDI />;
    }
    if (this.props.prefixPath === "/international/eib") {
      return <PreviousForecastsInternationalEIB />;
    }
    if (this.props.prefixPath === "/international/di") {
      return <PreviousForecastsInternationalDI />;
    }
    if (this.props.prefixPath === "/international/il") {
      return <PreviousForecastsInternationalIL />;
    }
    return <PreviousForecastsInternationalIL />;
  };
  public renderSummaryCurrentForecast = () => {
    if (this.props.prefixPath === "/china/dc") {
      return <SummaryCurrentForecastChinaDC />;
    }
    if (this.props.prefixPath === "/china/di") {
      return <SummaryCurrentForecastChinaDI />;
    }
    if (this.props.prefixPath === "/international/eib") {
      return <SummaryCurrentForecastInternationalEIB />;
    }
    if (this.props.prefixPath === "/international/di") {
      return <SummaryCurrentForecastInternationalDI />;
    }
    if (this.props.prefixPath === "/international/il") {
      return <SummaryCurrentForecastInternationalIL />;
    }
    return <SummaryCurrentForecastInternationalIL />;
  };
  public renderSummaryDefinition = () => <SummaryDefinition />;
  public renderSummaryKeyAssumptions = () => <SummaryKeyAssumption />;
  public renderDefault = () => (
    <Redirect to={`${this.props.prefixPath}/summary_current_forecast`} />
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
          <Route
            path={`${this.props.prefixPath}/summary_current_forecast`}
            render={this.renderSummaryCurrentForecast}
          />
          <Route
            path={`${this.props.prefixPath}/summary_definition`}
            render={this.renderSummaryDefinition}
          />
          <Route
            path={`${this.props.prefixPath}/summary_key_assumptions`}
            render={this.renderSummaryKeyAssumptions}
          />
        </Switch>
      </div>
    );
  }
}

export const DashboardTabBar = withStyles(styles)(
  withRouter(DashboardTabBarComponent)
);

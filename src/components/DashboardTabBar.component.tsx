import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import * as React from "react";
import { withRouter } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router-dom";
import { KPIS, PreviousForecasts } from "../pages";
import { Selector } from "./Selector.component";

const styles = {};

const DashboardTabBarComponent = withRouter((props: any) => {
  const onChange = () => null;
  const goToKPIS = () => props.history.push(`${props.prefixPath}/kpis`);
  const goToPreviousForecasts = () =>
    props.history.push(`${props.prefixPath}/previous_forecasts`);
  const renderKPIS = () => <KPIS />;
  const renderPreviousForecasts = () => <PreviousForecasts />;
  const renderDefault = () => <Redirect to="/china/dc/kpis" />;

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Button onClick={goToPreviousForecasts}>PREVIOUS FORECASTS</Button>
          <Button onClick={goToKPIS}>KPIS</Button>
          <Selector
            onChange={onChange}
            valueList={[
              "SUMMARY - CURRENT FORECAST",
              "SUMMARY - DEFINITION",
              "SUMMARY - KEY ASSUMPTIONS"
            ]}
            defaultDisplayedValue="SUMMARY - CURRENT FORECAST"
          />
          <Button variant="extendedFab">Create new forecast</Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route
          exact={true}
          path={`${props.prefixPath}`}
          render={renderDefault}
        />
        <Route path={`${props.prefixPath}/kpis`} render={renderKPIS} />
        <Route
          path={`${props.prefixPath}/previous_forecasts`}
          render={renderPreviousForecasts}
        />
      </Switch>
    </div>
  );
});

export const DashboardTabBar = withStyles(styles)(DashboardTabBarComponent);

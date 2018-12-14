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
  mesure: string;
  hashRoute: {
    [key: string]: string;
  };
}
const hashRouteVolume = {
  "SUMMARY OVERVIEW": "summary_overview",
  "SUMMARY ACTUAL AND FORECAST": "summary_actual",
  "SUMMARY INPUT PAST & FUTURE": "summary_input_past_and_future",
  "SUMMARY DEFINITIONS": "summary_definitions",
  "SUMMARY - KEY ASSUMPTIONS": "summary_key_assumptions"
};

const hashRouteValue = {
  "SUMMARY ACTUAL AND FORECAST": "summary_actual",
  "SUMMARY DEFINITIONS": "summary_definitions",
  "SUMMARY - KEY ASSUMPTIONS": "summary_key_assumptions"
};

const unitList = ["Volume", "Value"];

class DashboardTabBarComponent extends React.Component<IPropsType, IState> {
  public state = {
    mesure: "Volume",
    hashRoute: hashRouteVolume,
    currentFocusedTab: this.props.location.pathname.split("/").pop() || ""
  };
  public onSelectChange = (value: string) => {
    this.goToTab(this.state.hashRoute[value])();
  };
  public onMesureChange = (value: string) => {
    this.setState({
      mesure: value,
      hashRoute: value === "Volume" ? hashRouteVolume : hashRouteValue
    });
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
          <Toolbar style={{ justifyContent: "space-between" }}>
            <div>
              <SelectorOutlined
                onChange={this.onMesureChange}
                valueList={unitList}
                defaultDisplayedValue={unitList[0]}
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
                valueList={Object.keys(this.state.hashRoute)}
                defaultDisplayedValue="SUMMARY OVERVIEW"
                style={
                  Object.values(hashRouteVolume).includes(
                    this.state.currentFocusedTab
                  )
                    ? styles.focused
                    : styles.notFocused
                }
                iconColor="blue"
              />
            </div>
            <div>
              <Button
                style={{
                  backgroundColor: colors.mainColor,
                  color: "white",
                  borderRadius: 40,
                  fontWeight: "bold"
                }}
                onClick={this.goToTab("create_new_forecast")}
              >
                Create new forecast
              </Button>
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

export const DashboardTabBarCategory = withStyles(styles)(
  withRouter(DashboardTabBarComponent)
);

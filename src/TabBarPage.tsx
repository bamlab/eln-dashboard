import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DashboardTabBarCategory, DashboardTabBarDemand } from "./components";
import { TabBarCategory } from "./components/TabBarCategory.component";
import { TabBarDemand } from "./components/TabBarDemand.component";
import "./index.css";
import { INavigationProps } from "./typings/navigation";

export class TabBarPage extends React.Component<INavigationProps> {
  public renderPage = (props: any) => {
    if (props.match.params.department === "demand") {
      return <DashboardTabBarDemand />;
    } else if (props.match.params.department === "category") {
      return <DashboardTabBarCategory />;
    } else {
      return <Redirect to={"demand"} />;
    }
  };
  public renderTabBar = () => {
    const { match } = this.props;
    if (match.params.department === "demand") {
      return <TabBarDemand />;
    } else if (match.params.department === "category") {
      return <TabBarCategory />;
    } else {
      return <Redirect to={"demand"} />;
    }
  };
  public renderDefault = () => {
    const { match } = this.props;
    if (match.params.department === "demand") {
      return <Redirect to={`${match.url}/china/all`} />;
    } else {
      return <Redirect to={`${match.url}/tailored_nutrition/regular`} />;
    }
  };

  public render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        {this.renderTabBar()}
        <Switch>
          <Route
            path={`${match.path}/:zona/:category`}
            render={this.renderPage}
          />
          <Route path={`${match.path}`} render={this.renderDefault} />
        </Switch>
      </React.Fragment>
    );
  }
}

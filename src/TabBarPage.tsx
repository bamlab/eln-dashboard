import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DashboardTabBarCategory, DashboardTabBarDemand } from "./components";
import { TabBarCategory } from "./components/TabBarCategory.component";
import { TabBarDemand } from "./components/TabBarDemand.component";
import "./index.css";

export class TabBarPage extends React.Component {
  public renderPage = (props: any) => {
    if (props.match.params.department === "demand") {
      return <DashboardTabBarDemand />;
    } else {
      return <DashboardTabBarCategory />;
    }
  };
  public renderTabBar = () => {
    // @ts-ignore
    if (this.props.match.params.department === "demand") {
      return <TabBarDemand />;
      // @ts-ignore
    } else if (this.props.match.params.department === "category") {
      return <TabBarCategory />;
    } else {
      return <Redirect to={"demand"} />;
    }
  };

  public render() {
    // @ts-ignore
    const { match } = this.props;
    return (
      <React.Fragment>
        {this.renderTabBar()}
        <Switch>
          <Route
            path={`${match.path}/:zona/:category`}
            render={this.renderPage}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

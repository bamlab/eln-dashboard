import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import * as React from "react";
import { withRouter } from "react-router-dom";
import { Selector } from "./Selector.component";

const styles = {
  root: {
    flexGrow: 1
  }
};

const HeaderBar = withRouter((props: any) => {
  const selectChinaPage = (value: string) => {
    if (value === "China DC") {
      props.history.push("/china/dc");
    } else {
      props.history.push("/china/di");
    }
  };
  const selectInternationalPage = (value: string) => {
    if (value === "International Label DC") {
      props.history.push("/china/dc");
    } else {
      props.history.push("/china/di");
    }
  };
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Selector
            onChange={selectChinaPage}
            valueList={["China DC", "China DI"]}
            defaultDisplayedValue="China DC"
          />
          <Selector
            onChange={selectInternationalPage}
            valueList={["International Label DI", "International Label DC"]}
            defaultDisplayedValue="International Label DI"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
});

export const Header = withStyles(styles)(HeaderBar);

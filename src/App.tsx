import * as React from "react";
import { ColumnChart } from "./charts/ColumnChart";
import { LineChart } from "./charts/LineChart";
import { LineColumnChart } from "./charts/LineColumnChart";

const theme = {
  spacing: { unit: 50 }
};

const styles = {
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3
  }
};

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <div style={styles.layout}>
          <ColumnChart />
          <LineChart />
          <LineColumnChart />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

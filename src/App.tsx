import * as React from "react";
import "./App.css";
import { ColumnChart } from "./charts/ColumnChart";
import { LineChart } from "./charts/LineChart";
import { LineColumnChart } from "./charts/LineColumnChart";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ColumnChart />
        <LineChart />
        <LineColumnChart />
      </div>
    );
  }
}

export default App;

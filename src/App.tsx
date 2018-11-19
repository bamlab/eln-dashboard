import * as React from "react";
import "./App.css";
import { ColumnChart } from "./charts/ColumnChart";
import { VerySimpleChart } from "./charts/VerySimpleChart";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <VerySimpleChart />
        <ColumnChart />
      </div>
    );
  }
}

export default App;

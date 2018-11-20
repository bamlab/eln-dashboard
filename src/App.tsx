import * as React from "react";
import "./App.css";
import { ColumnChart } from "./charts/ColumnChart";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ColumnChart />
      </div>
    );
  }
}

export default App;

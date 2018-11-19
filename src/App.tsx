import * as React from "react";
import "./App.css";
import { VerySimpleChart } from "./charts/VerySimpleChart";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <VerySimpleChart />
      </div>
    );
  }
}

export default App;

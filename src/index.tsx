import { MuiThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { theme } from "./theme";

ReactDOM.render(
  <BrowserRouter basename="/eln-dashboard/#/">
    <MuiThemeProvider theme={theme}>
      <div style={{ marginLeft: 100, marginRight: 100 }}>
        <App />
      </div>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();

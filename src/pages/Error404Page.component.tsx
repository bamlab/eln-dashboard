import { Typography } from "@material-ui/core";
import * as React from "react";
import { colors } from "../theme";

export class Error404Page extends React.Component {
  public render() {
    return (
      <div
        style={{
          padding: "100px"
        }}
      >
        <Typography
          style={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: 24,
            color: colors.mainFontColor,
            opacity: 0.6
          }}
          gutterBottom={true}
        >
          Error : This page has not been found
        </Typography>
      </div>
    );
  }
}

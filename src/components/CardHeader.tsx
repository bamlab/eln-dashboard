import { Typography } from "@material-ui/core";
import * as React from "react";

export const CardHeader: React.FunctionComponent<{
  title: string;
  className: string;
}> = props => {
  const style: React.CSSProperties = {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between"
  };
  return (
    <div style={style}>
      <Typography gutterBottom={true} className={props.className}>
        {props.title}
      </Typography>
      <div style={{ alignSelf: "right" }}>{props.children}</div>
    </div>
  );
};

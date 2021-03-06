import { TableHead } from "@material-ui/core";
import * as React from "react";
import { colors } from "../../theme";

export class TableBlueSubHeader extends React.PureComponent {
  public render() {
    return (
      <TableHead
        style={{
          backgroundColor: colors.mainColor,
          color: "white",
          fontSize: 5
        }}
      >
        {this.props.children}
      </TableHead>
    );
  }
}

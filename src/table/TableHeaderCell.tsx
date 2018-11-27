import { TableCell } from "@material-ui/core";
import * as React from "react";
import { colors } from "src/theme";

export const TableHeaderCell: React.FunctionComponent = props => {
  return (
    <TableCell style={{ fontWeight: "bold", color: colors.mainColor }}>
      {props.children}
    </TableCell>
  );
};

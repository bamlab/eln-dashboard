import { TableRow } from "@material-ui/core";
import * as React from "react";
import { colors } from "src/theme";

export const TableTotalRow: React.FunctionComponent = props => {
  return (
    <TableRow style={{ backgroundColor: colors.mainColor }}>
      {props.children}
    </TableRow>
  );
};

import { TableRow } from "@material-ui/core";
import * as React from "react";
import { colors } from "src/theme";

export const TableSubTotalRow: React.FunctionComponent = props => {
  return (
    <TableRow style={{ backgroundColor: colors.secondaryColor }}>
      {props.children}
    </TableRow>
  );
};

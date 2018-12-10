import { withStyles } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";
import { TableCellProps } from "@material-ui/core/TableCell";
import * as React from "react";
import { colors } from "src/theme";
import { TableCell as NativeTableCell } from "./TableCell";

interface IProps extends TableCellProps {}

const style: StyleRules = {
  paddingDense: { padding: "5px" }
};

const TableCell = withStyles(style)(NativeTableCell);

export const TableBlueCell: React.FunctionComponent<IProps> = props => {
  return (
    <TableCell
      {...props}
      style={{ fontWeight: "bold", color: colors.mainColor, border: undefined }}
    >
      {props.children}
    </TableCell>
  );
};

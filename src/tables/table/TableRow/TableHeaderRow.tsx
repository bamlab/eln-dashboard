import { TableRow as NativeTableRow, withStyles } from "@material-ui/core";

export const TableHeaderRow = withStyles({ root: { height: 40 } })(
  NativeTableRow
);

import { TableCell as NativeTableCell, withStyles } from "@material-ui/core";

export const TableCell = withStyles({ paddingDense: { padding: 6 } })(
  NativeTableCell
);

import { withStyles } from "@material-ui/core";
import { TableCell } from "./TableCell";

export const TableFooterCell = withStyles({
  paddingDense: { color: "white" }
})(TableCell);

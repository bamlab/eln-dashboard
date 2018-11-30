import { withStyles } from "@material-ui/core";
import { colors } from "src/theme";
import { TableCell } from "./TableCell";

export const TableNegativeCell = withStyles({
  root: { color: colors.errorColor }
})(TableCell);

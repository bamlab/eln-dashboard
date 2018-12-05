import { withStyles } from "@material-ui/core";
import { colors } from "src/theme";
import { TableCell } from "./TableCell";

export const TableNegativeCell = withStyles({
  paddingDense: { color: colors.errorColor }
})(TableCell);

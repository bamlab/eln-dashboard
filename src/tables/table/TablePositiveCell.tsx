import { withStyles } from "@material-ui/core";
import { colors } from "src/theme";
import { TableCell } from "./TableCell";

export const TablePositiveCell = withStyles({
  paddingDense: { color: colors.successColor, textAlign: "right" }
})(TableCell);

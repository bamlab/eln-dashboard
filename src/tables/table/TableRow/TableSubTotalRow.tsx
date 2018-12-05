import { TableRow as NativeTableRow, withStyles } from "@material-ui/core";
import { colors } from "src/theme";

export const TableSubTotalRow = withStyles({
  root: { height: 30, backgroundColor: colors.secondaryColor }
})(NativeTableRow);

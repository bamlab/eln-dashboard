import { TableRow as NativeTableRow, withStyles } from "@material-ui/core";
import { colors } from "src/theme";

export const TableTotalRow = withStyles({
  root: { height: 30, backgroundColor: colors.mainColor, color: "white" }
})(NativeTableRow);

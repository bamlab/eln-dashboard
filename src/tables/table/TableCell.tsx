import { TableCell as NativeTableCell, withStyles } from "@material-ui/core";
import { colors } from "src/theme";

export const TableCell = withStyles({
  paddingDense: { padding: 6, borderWidth: 0 },
  footer: { fontWeight: "bold", color: colors.mainColor }
})(NativeTableCell);

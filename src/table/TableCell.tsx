import { TableCell as NativeTableCell, withStyles } from "@material-ui/core";
import { colors } from "src/theme";

export const TableCell = withStyles({
  paddingDense: { padding: 6, borderWidth: 0 },
  header: { fontWeight: "bold", color: colors.mainColor },
  footer: { fontWeight: "bold", color: colors.mainColor }
})(NativeTableCell);

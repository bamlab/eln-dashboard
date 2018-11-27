import { TableCell } from "@material-ui/core";
import { TableCellProps } from "@material-ui/core/TableCell";
import * as React from "react";
import { colors } from "src/theme";

interface IProps extends TableCellProps {}

export const TableHeaderCell: React.FunctionComponent<IProps> = props => {
  return (
    <TableCell
      {...props}
      style={{ fontWeight: "bold", color: colors.mainColor }}
    >
      {props.children}
    </TableCell>
  );
};

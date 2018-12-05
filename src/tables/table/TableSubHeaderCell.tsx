import { TableCell as NativeTableCell, withStyles } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";
import { TableCellProps } from "@material-ui/core/TableCell";
import * as React from "react";

const defaultProps = { isBold: false };

interface IProps extends TableCellProps {
  children?: React.ReactNode;
}

const style: StyleRules = {
  paddingDense: { padding: "6px", flex: 1 }
};

const TableCell = withStyles(style)(NativeTableCell);

export const TableSubHeaderCell: React.FunctionComponent<
  IProps & Partial<typeof defaultProps>
> = (props: IProps & typeof defaultProps) => {
  props = { ...defaultProps, ...props };
  return (
    <TableCell style={{ fontWeight: "bold", color: "white" }}>
      {props.children}
    </TableCell>
  );
};

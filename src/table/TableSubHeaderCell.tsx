import { TableCell } from "@material-ui/core";
import { TableCellProps } from "@material-ui/core/TableCell";
import * as React from "react";

const defaultProps = { isBold: false };

interface IProps extends TableCellProps {
  children?: React.ReactNode;
}

export const TableSubHeaderCell: React.FunctionComponent<
  IProps & Partial<typeof defaultProps>
> = (props: IProps & typeof defaultProps) => {
  props = { ...defaultProps, ...props };
  return (
    <TableCell style={{ fontWeight: "normal", color: "white" }}>
      {props.children}
    </TableCell>
  );
};

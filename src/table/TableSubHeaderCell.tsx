import { TableCell } from "@material-ui/core";
import * as React from "react";

const defaultProps = { isBold: false };

export const TableSubHeaderCell: React.FunctionComponent<
  Partial<typeof defaultProps>
> = (props: typeof defaultProps, children) => {
  props = { ...defaultProps, ...props };
  return (
    <TableCell style={{ fontWeight: "normal", color: "white" }}>
      {children}
    </TableCell>
  );
};

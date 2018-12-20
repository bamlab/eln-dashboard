import { Table, TableBody, TableFooter } from "@material-ui/core";
import * as React from "react";
import { colors } from "src/theme";
import { TableBlueSubHeader } from "./table/TableBlueSubHeader";
import { TableCell } from "./table/TableCell";
import { TableFooterCell } from "./table/TableFooterCell";
import { TableRow } from "./table/TableRow/TableRow";
import { TableTotalRow } from "./table/TableRow/TableTotalRow";
import { TableSubHeaderCell } from "./table/TableSubHeaderCell";

export class CollapsableTable extends React.Component {
  public state = {
    hidden: false,
    height: 21
  };

  public collapseRow = () => {
    this.setState(
      { hidden: !this.state.hidden, height: this.state.hidden ? 0 : 21 },
      () => {
        console.log(this.state);
      }
    );
  };

  public render = () => {
    return (
      <Table padding={"dense"}>
        <TableBlueSubHeader>
          <TableRow style={{ height: 40 }}>
            <TableSubHeaderCell />
            <TableSubHeaderCell>Column 1</TableSubHeaderCell>
            <TableSubHeaderCell>Column 2</TableSubHeaderCell>
          </TableRow>
        </TableBlueSubHeader>
        <TableBody
          style={{
            backgroundColor: colors.backgroundSecondaryColor
          }}
        >
          <TableRow
            style={{ height: this.state.height, transition: "height 1s ease" }}
          >
            <TableCell
              style={{
                height: this.state.height,
                transition: "height 1s ease"
              }}
            >
              Row A
            </TableCell>
            <TableCell
              style={{
                height: this.state.height,
                transition: "height 1s ease"
              }}
            >
              Value 1
            </TableCell>
            <TableCell
              style={{
                height: this.state.height,
                transition: "height 1s ease"
              }}
            >
              Value 2
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter onClick={this.collapseRow}>
          <TableTotalRow>
            <TableFooterCell>Row Total</TableFooterCell>
            <TableFooterCell>Value 1</TableFooterCell>
            <TableFooterCell>Value 2</TableFooterCell>
          </TableTotalRow>
        </TableFooter>
      </Table>
    );
  };
}

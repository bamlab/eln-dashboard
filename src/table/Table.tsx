import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import * as React from "react";
import { TableBlueSubHeader } from "./TableBlueSubHeader";
import { TableHeaderCell } from "./TableHeaderCell";
// import { TableSubHeaderCell } from "./TableSubHeaderCell";

export class CustomTable extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Card style={{ margin: 25 }}>
        <h3 style={{ marginLeft: 25 }}>Current Cycle DC</h3>
        <Table>
          <TableHead>
            <TableHeaderCell />
            <TableHeaderCell>2017 FY (ACT)</TableHeaderCell>
            <TableHeaderCell />
            <TableHeaderCell>2018 FY (OCT VERSION)</TableHeaderCell>
            <TableHeaderCell />
            <TableHeaderCell>2019 FY (OCT VERSION)</TableHeaderCell>
          </TableHead>
          <TableBlueSubHeader>
            <TableRow>
              {/* <TableSubHeaderCell />
              <TableSubHeaderCell>Sell-in (ACT)</TableSubHeaderCell> */}
              {/* <TableSubHeaderCell>Offtake (ACT)</TableSubHeaderCell>
              <TableSubHeaderCell>Sell-in (WO return)</TableSubHeaderCell>
              <TableSubHeaderCell>Sell-in vs LV</TableSubHeaderCell>
              <TableSubHeaderCell>Offtake</TableSubHeaderCell>
              <TableSubHeaderCell>Offtake vs LV</TableSubHeaderCell> */}
            </TableRow>
          </TableBlueSubHeader>
          <TableBody>
            <TableCell>Data</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Data</TableCell>
          </TableBody>
        </Table>
      </Card>
    );
  }
}

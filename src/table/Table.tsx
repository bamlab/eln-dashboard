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
import { TableSubHeaderCell } from "./TableSubHeaderCell";

export class CustomTable extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Card style={{ margin: 25 }}>
        <h3 style={{ marginLeft: 25 }}>Current Cycle DC</h3>
        <Table padding={"dense"}>
          <TableHead>
            <TableHeaderCell />
            <TableHeaderCell colSpan={2}>2017 FY (ACT)</TableHeaderCell>
            <TableHeaderCell colSpan={4}>2018 FY (OCT VERSION)</TableHeaderCell>
            <TableHeaderCell colSpan={4}>2019 FY (OCT VERSION)</TableHeaderCell>
          </TableHead>
          <TableBlueSubHeader>
            <TableRow>
              <TableSubHeaderCell />
              <TableSubHeaderCell>Sell-in (ACT)</TableSubHeaderCell>
              <TableSubHeaderCell>Offtake (ACT)</TableSubHeaderCell>
              <TableSubHeaderCell>Sell-in (WO return)</TableSubHeaderCell>
              <TableSubHeaderCell>Sell-in vs LV</TableSubHeaderCell>
              <TableSubHeaderCell>Offtake</TableSubHeaderCell>
              <TableSubHeaderCell>Offtake vs LV</TableSubHeaderCell>
              <TableSubHeaderCell>Sell-in (WO return)</TableSubHeaderCell>
              <TableSubHeaderCell>Sell-in vs LV</TableSubHeaderCell>
              <TableSubHeaderCell>Offtake</TableSubHeaderCell>
              <TableSubHeaderCell>Offtake vs LV</TableSubHeaderCell>
            </TableRow>
          </TableBlueSubHeader>
          <TableBody style={{ backgroundColor: "#EDF9FE" }}>
            <TableRow>
              <TableCell>NC1</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>NC2</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>NC3</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>NC4</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total NC</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Growth vs LI</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell>AC1</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>AC2</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>AC3</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>AC4</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total AC</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Growth vs LI</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    );
  }
}

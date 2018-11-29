import { Card, Table, TableBody, TableHead } from "@material-ui/core";
import * as React from "react";
import { TableBlueSubHeader } from "./TableBlueSubHeader";
import { TableCell } from "./TableCell";
import { TableHeaderCell } from "./TableHeaderCell";
import { TableRow } from "./TableRow/TableRow";
import { TableSubTotalRow } from "./TableRow/TableSubTotalRow";
import { TableTotalRow } from "./TableRow/TableTotalRow";
import { TableSubHeaderCell } from "./TableSubHeaderCell";

const RowsData = () => {
  return (
    <React.Fragment>
      <TableCell>{Math.floor(Math.random() * 1000)}</TableCell>
      <TableCell>{Math.floor(Math.random() * 1000)}</TableCell>
      <TableCell>{Math.floor(Math.random() * 1000)}</TableCell>
      <TableCell>{Math.floor(Math.random() * 1000)}</TableCell>
      <TableCell>{Math.floor(Math.random() * 1000)}</TableCell>
      <TableCell>{Math.floor(Math.random() * 1000)}</TableCell>
      <TableCell>{Math.floor(Math.random() * 1000)}</TableCell>
      <TableCell>{Math.floor(Math.random() * 1000)}</TableCell>
      <TableCell>{Math.floor(Math.random() * 1000)}</TableCell>
      <TableCell>{Math.floor(Math.random() * 1000)}</TableCell>
    </React.Fragment>
  );
};

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
            <TableRow style={{ height: 40 }}>
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
              <RowsData />
            </TableRow>
            <TableRow>
              <TableCell>NC2</TableCell>
              <RowsData />
            </TableRow>
            <TableRow>
              <TableCell>NC3</TableCell>
              <RowsData />
            </TableRow>
            <TableRow>
              <TableCell>NC4</TableCell>
              <RowsData />
            </TableRow>
            <TableRow>
              <TableCell>Total NC</TableCell>
              <RowsData />
            </TableRow>
            <TableRow>
              <TableCell>Growth vs LI</TableCell>
              <RowsData />
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell>AC1</TableCell>
              <RowsData />
            </TableRow>
            <TableRow>
              <TableCell>AC2</TableCell>
              <RowsData />
            </TableRow>
            <TableRow>
              <TableCell>AC3</TableCell>
              <RowsData />
            </TableRow>
            <TableRow>
              <TableCell>AC4</TableCell>
              <RowsData />
            </TableRow>
            <TableRow>
              <TableCell>Total AC</TableCell>
              <RowsData />
            </TableRow>
            <TableRow>
              <TableCell>Growth vs LI</TableCell>
              <RowsData />
            </TableRow>
            <TableSubTotalRow>
              <TableCell>Total NP</TableCell>
              <RowsData />
            </TableSubTotalRow>
            <TableTotalRow>
              <TableCell>Total AP 1.0</TableCell>
              <RowsData />
            </TableTotalRow>
            <TableSubTotalRow>
              <TableCell>Total AP Tornado</TableCell>
              <RowsData />
            </TableSubTotalRow>
            <TableTotalRow>
              <TableCell>Total AP 2.0</TableCell>
              <RowsData />
            </TableTotalRow>
          </TableBody>
          <TableBody style={{ backgroundColor: "#EDF9FE" }}>
            <TableRow>
              <TableCell>NC1</TableCell>
              <RowsData />
            </TableRow>
            <TableRow>
              <TableCell>NC2</TableCell>
              <RowsData />
            </TableRow>
            <TableRow>
              <TableCell>NC3</TableCell>
              <RowsData />
            </TableRow>
            <TableRow>
              <TableCell>NC4</TableCell>
              <RowsData />
            </TableRow>
            <TableRow>
              <TableCell>Total NC</TableCell>
              <RowsData />
            </TableRow>
            <TableRow>
              <TableCell>Growth vs LI</TableCell>
              <RowsData />
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell>Total vs LI</TableCell>
              <RowsData />
            </TableRow>
            <TableSubTotalRow>
              <TableCell>Total</TableCell>
              <RowsData />
            </TableSubTotalRow>
            <TableTotalRow>
              <TableCell>Growth vs LI</TableCell>
              <RowsData />
            </TableTotalRow>
          </TableBody>
        </Table>
      </Card>
    );
  }
}

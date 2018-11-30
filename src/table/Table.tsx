import { Table, TableBody, TableFooter, TableHead } from "@material-ui/core";
import * as React from "react";
import { TableBlueSubHeader } from "./TableBlueSubHeader";
import { TableCell } from "./TableCell";
import { TableFooterCell } from "./TableFooterCell";
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

const FooterRowsData = () => {
  return (
    <React.Fragment>
      <TableFooterCell>{Math.floor(Math.random() * 1000)}</TableFooterCell>
      <TableFooterCell>{Math.floor(Math.random() * 1000)}</TableFooterCell>
      <TableFooterCell>{Math.floor(Math.random() * 1000)}</TableFooterCell>
      <TableFooterCell>{Math.floor(Math.random() * 1000)}</TableFooterCell>
      <TableFooterCell>{Math.floor(Math.random() * 1000)}</TableFooterCell>
      <TableFooterCell>{Math.floor(Math.random() * 1000)}</TableFooterCell>
      <TableFooterCell>{Math.floor(Math.random() * 1000)}</TableFooterCell>
      <TableFooterCell>{Math.floor(Math.random() * 1000)}</TableFooterCell>
      <TableFooterCell>{Math.floor(Math.random() * 1000)}</TableFooterCell>
      <TableFooterCell>{Math.floor(Math.random() * 1000)}</TableFooterCell>
    </React.Fragment>
  );
};

export class CustomTable extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Table padding={"dense"}>
        <TableFooter />
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
        </TableBody>
        <TableFooter style={{ backgroundColor: "#EDF9FE" }}>
          <TableRow>
            <TableCell>Total NC</TableCell>
            <RowsData />
          </TableRow>
          <TableRow>
            <TableCell>Growth vs LI</TableCell>
            <RowsData />
          </TableRow>
        </TableFooter>
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
        </TableBody>
        <TableFooter>
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
            <TableFooterCell>Total AP 1.0</TableFooterCell>
            <FooterRowsData />
          </TableTotalRow>
          <TableSubTotalRow>
            <TableCell>Total AP Tornado</TableCell>
            <RowsData />
          </TableSubTotalRow>
          <TableTotalRow>
            <TableFooterCell>Total AP 2.0</TableFooterCell>
            <FooterRowsData />
          </TableTotalRow>
        </TableFooter>
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
        <TableFooter>
          <TableRow>
            <TableCell>Total vs LI</TableCell>
            <RowsData />
          </TableRow>
          <TableSubTotalRow>
            <TableCell>Total</TableCell>
            <RowsData />
          </TableSubTotalRow>
          <TableTotalRow>
            <TableFooterCell>Growth vs LI</TableFooterCell>
            <FooterRowsData />
          </TableTotalRow>
        </TableFooter>
      </Table>
    );
  }
}

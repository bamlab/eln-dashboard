import { Table, TableBody } from "@material-ui/core";
import * as React from "react";
import { TableBlueSubHeader } from "./TableBlueSubHeader";
import { TableCell } from "./TableCell";
import { TableRow } from "./TableRow/TableRow";
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
      <TableCell>{Math.floor(Math.random() * 1000)}</TableCell>
      <TableCell>{Math.floor(Math.random() * 1000)}</TableCell>
      <TableCell>{Math.floor(Math.random() * 1000)}</TableCell>
    </React.Fragment>
  );
};

export class CustomTable extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Table padding={"dense"}>
        <TableBlueSubHeader>
          <TableRow style={{ height: 40 }}>
            <TableSubHeaderCell>Nutrilon Classic</TableSubHeaderCell>
            <TableSubHeaderCell>Jan</TableSubHeaderCell>
            <TableSubHeaderCell>Feb</TableSubHeaderCell>
            <TableSubHeaderCell>Mar</TableSubHeaderCell>
            <TableSubHeaderCell>Apr</TableSubHeaderCell>
            <TableSubHeaderCell>May</TableSubHeaderCell>
            <TableSubHeaderCell>Jun</TableSubHeaderCell>
            <TableSubHeaderCell>Jul</TableSubHeaderCell>
            <TableSubHeaderCell>Aug</TableSubHeaderCell>
            <TableSubHeaderCell>Sep</TableSubHeaderCell>
            <TableSubHeaderCell>Oct</TableSubHeaderCell>
            <TableSubHeaderCell>Nov</TableSubHeaderCell>
            <TableSubHeaderCell>Dec</TableSubHeaderCell>
            <TableSubHeaderCell>FY 2018</TableSubHeaderCell>
          </TableRow>
        </TableBlueSubHeader>
        <TableBody>
          <TableRow>
            <TableCell>2017 Offtake</TableCell>
            <RowsData />
          </TableRow>
          <TableRow>
            <TableCell>2018 Offtake - Demand</TableCell>
            <RowsData />
          </TableRow>
          <TableRow>
            <TableCell>Trade inventory - ending</TableCell>
            <RowsData />
          </TableRow>
          <TableRow>
            <TableCell>Sell-in: Oct Demand</TableCell>
            <RowsData />
          </TableRow>
          <TableRow>
            <TableCell>Diff from (RF-10)</TableCell>
            <RowsData />
          </TableRow>
          <TableRow>
            <TableCell>Inv assumption (Month cover)</TableCell>
            <RowsData />
          </TableRow>
        </TableBody>
        <TableBlueSubHeader>
          <TableRow style={{ height: 40 }}>
            <TableSubHeaderCell>Nutrilon Classic</TableSubHeaderCell>
            <TableSubHeaderCell>Jan</TableSubHeaderCell>
            <TableSubHeaderCell>Feb</TableSubHeaderCell>
            <TableSubHeaderCell>Mar</TableSubHeaderCell>
            <TableSubHeaderCell>Apr</TableSubHeaderCell>
            <TableSubHeaderCell>May</TableSubHeaderCell>
            <TableSubHeaderCell>Jun</TableSubHeaderCell>
            <TableSubHeaderCell>Jul</TableSubHeaderCell>
            <TableSubHeaderCell>Aug</TableSubHeaderCell>
            <TableSubHeaderCell>Sep</TableSubHeaderCell>
            <TableSubHeaderCell>Oct</TableSubHeaderCell>
            <TableSubHeaderCell>Nov</TableSubHeaderCell>
            <TableSubHeaderCell>Dec</TableSubHeaderCell>
            <TableSubHeaderCell>FY 2018</TableSubHeaderCell>
          </TableRow>
        </TableBlueSubHeader>
        <TableBody>
          <TableRow>
            <TableCell>2018 Offtake</TableCell>
            <RowsData />
          </TableRow>
          <TableRow>
            <TableCell>2019 Offtake - Demand</TableCell>
            <RowsData />
          </TableRow>
          <TableRow>
            <TableCell>Trade inventory - ending</TableCell>
            <RowsData />
          </TableRow>
          <TableRow>
            <TableCell>Sell-in: Oct Demand</TableCell>
            <RowsData />
          </TableRow>
          <TableRow>
            <TableCell>Diff from (RF-10)</TableCell>
            <RowsData />
          </TableRow>
          <TableRow>
            <TableCell>Inv assumption (Month cover)</TableCell>
            <RowsData />
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

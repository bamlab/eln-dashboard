import { Table, TableBody } from "@material-ui/core";
import * as React from "react";
import {
  IWrappedComponentProps,
  WithGoogleData
} from "src/highOrderComponents/withGoogleData";
import { TableBlueSubHeader } from "./table/TableBlueSubHeader";
import { TableCell } from "./table/TableCell";
import { TableNegativeCell } from "./table/TableNegativeCell";
import { TableRow } from "./table/TableRow/TableRow";
import { TableSubHeaderCell } from "./table/TableSubHeaderCell";

export const EIBPreviousOfftake = WithGoogleData(
  class extends React.Component<IWrappedComponentProps> {
    public render() {
      if (this.props.data.length) {
        const data = [...this.props.data];
        const secondHeaders = data.shift();
        const secondHeadersJSX = secondHeaders
          .slice(1)
          .map((header: string) => {
            return (
              <TableSubHeaderCell key={`firstHeader${header}`}>
                {header}{" "}
              </TableSubHeaderCell>
            );
          });

        const tableRows = data.map((readonlySerie: ReadonlyArray<string>) => {
          const serie = [...readonlySerie];
          const serieName = serie.shift();
          const valueCells = serie.map((value: string, index: number) => {
            const trimedString = value.trim();
            const isNegative =
              trimedString.length &&
              (trimedString[0] === "-" || trimedString[0] === "(");
            const CellType = isNegative ? TableNegativeCell : TableCell;
            return (
              <CellType key={`valueCell${serieName}${index}`}>{value}</CellType>
            );
          });
          const cells = [
            <TableCell key={`serieName${serieName}`}>{serieName}</TableCell>,
            ...valueCells
          ];
          return <TableRow key={`tableRow${serieName}`}>{cells}</TableRow>;
        });
        return (
          <Table padding={"dense"}>
            <TableBlueSubHeader>
              <TableRow style={{ height: 40 }}>
                <TableSubHeaderCell />
                {secondHeadersJSX}
              </TableRow>
            </TableBlueSubHeader>
            <TableBody style={{ backgroundColor: "white" }}>
              {tableRows}
            </TableBody>
          </Table>
        );
      }

      return null;
    }
  }
);

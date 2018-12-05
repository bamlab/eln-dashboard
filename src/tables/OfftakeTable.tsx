import { Table, TableBody, TableFooter } from "@material-ui/core";
import * as React from "react";
import {
  IWrappedComponentProps,
  WithGoogleData
} from "src/highOrderComponents/withGoogleData";
import { colors } from "src/theme";
import { TableBlueSubHeader } from "./table/TableBlueSubHeader";
import { TableCell } from "./table/TableCell";
import { TableFooterCell } from "./table/TableFooterCell";
import { TableNegativeCell } from "./table/TableNegativeCell";
import { TableRow } from "./table/TableRow/TableRow";
import { TableTotalRow } from "./table/TableRow/TableTotalRow";
import { TableSubHeaderCell } from "./table/TableSubHeaderCell";

export const OfftakeTable = WithGoogleData(
  class extends React.Component<IWrappedComponentProps> {
    public render() {
      if (this.props.data.length) {
        const data = new Array(...this.props.data);
        const firstHeaders = data.shift();
        console.log("firstHeader", firstHeaders);
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
        const total = data.shift();
        const totalJSX = total.map((value: string, index: number) => {
          return (
            <TableFooterCell key={`total${index}`}>{value}</TableFooterCell>
          );
        });
        const tableRows = data.map((serie: string[]) => {
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
            <TableBody
              style={{ backgroundColor: colors.backgroundSecondaryColor }}
            >
              {tableRows}
            </TableBody>
            <TableFooter>
              <TableTotalRow>{totalJSX}</TableTotalRow>
            </TableFooter>
          </Table>
        );
      }

      return null;
    }
  }
);

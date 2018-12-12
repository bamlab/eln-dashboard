import { Table, TableBody, TableFooter } from "@material-ui/core";
import * as React from "react";
import {
  IWrappedComponentProps,
  WithGoogleData
} from "src/highOrderComponents/withGoogleData";
import { colors } from "src/theme";
import { TableBlueSubHeader } from "./table/TableBlueSubHeader";
import { TableCell } from "./table/TableCell";
import { TableHeaderCell } from "./table/TableHeaderCell";
import { TableNegativeCell } from "./table/TableNegativeCell";
import { TableRow } from "./table/TableRow/TableRow";
import { TableSubHeaderCell } from "./table/TableSubHeaderCell";

export const EIBOfftakeForecastAccuracyBiasTable = WithGoogleData(
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
        const totalM1 = data.pop();
        const totalM1JSX = totalM1.map((value: string, index: number) => {
          return (
            <TableHeaderCell key={`total${index}`}>{value}</TableHeaderCell>
          );
        });
        const totalM4 = data.pop();
        const totalM4JSX = totalM4.map((value: string, index: number) => {
          return (
            <TableHeaderCell key={`total${index}`}>{value}</TableHeaderCell>
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
            <TableFooter
              style={{ backgroundColor: colors.backgroundSecondaryColor }}
            >
              <TableRow>{totalM1JSX}</TableRow>
              <TableRow>{totalM4JSX}</TableRow>
            </TableFooter>
          </Table>
        );
      }

      return null;
    }
  }
);

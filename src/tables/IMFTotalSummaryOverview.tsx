import { Table, TableBody } from "@material-ui/core";
import * as React from "react";
import {
  IWrappedComponentProps,
  WithGoogleData
} from "src/highOrderComponents/withGoogleData";
import { colors } from "src/theme";
import { TableBlueSubHeader } from "./table/TableBlueSubHeader";
import { TableCell } from "./table/TableCell";
import { TableNegativeCell } from "./table/TableNegativeCell";
import { TablePositiveCell } from "./table/TablePositiveCell";
import { TableRow } from "./table/TableRow/TableRow";
import { TableSubHeaderCell } from "./table/TableSubHeaderCell";

export const IMFTotalSummaryOverview = WithGoogleData(
  class extends React.Component<IWrappedComponentProps> {
    public render() {
      if (this.props.data.length) {
        const data = [...this.props.data];
        const firstHeader = data.shift();
        const firstHeaderJSX = firstHeader.map((header: string) => {
          return (
            <TableSubHeaderCell key={`firstHeader${header}`}>
              {header}{" "}
            </TableSubHeaderCell>
          );
        });
        const tableRows = data.map((serie: string[]) => {
          const serieName = serie.shift();
          const valueCells = serie.map((value: string, index: number) => {
            const trimedString = value.trim();
            const isNegative =
              trimedString.length &&
              (trimedString[0] === "-" || trimedString[0] === "(");
            const isNumber = trimedString.match(/^\d/);
            const CellType = isNegative
              ? TableNegativeCell
              : isNumber
              ? TablePositiveCell
              : TableCell;
            return (
              <CellType key={`valueCell${serieName}${index}`}>{value}</CellType>
            );
          });
          const cells = [
            <TableCell
              key={`serieName${serieName}`}
              style={{ color: colors.mainColor, fontWeight: "bold" }}
            >
              {serieName}
            </TableCell>,
            ...valueCells
          ];
          return <TableRow key={`tableRow${serieName}`}>{cells}</TableRow>;
        });
        return (
          <Table
            padding={"dense"}
            style={{
              borderStyle: "solid",
              borderColor: "black",
              borderWidth: 1
            }}
          >
            <TableBlueSubHeader>
              <TableRow style={{ height: 40 }}>{firstHeaderJSX}</TableRow>
            </TableBlueSubHeader>
            <TableBody
              style={{ backgroundColor: colors.backgroundSecondaryColor }}
            >
              {tableRows}
            </TableBody>
          </Table>
        );
      }

      return null;
    }
  }
);

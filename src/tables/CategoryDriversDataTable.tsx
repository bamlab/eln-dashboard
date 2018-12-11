import { Table, TableBody } from "@material-ui/core";
import * as React from "react";
import {
  IWrappedComponentProps,
  WithGoogleData
} from "src/highOrderComponents/withGoogleData";
import { TableBlueSubHeader } from "./table/TableBlueSubHeader";
import { TableCell } from "./table/TableCell";
import { TableRow } from "./table/TableRow/TableRow";
import { TableSubHeaderCell } from "./table/TableSubHeaderCell";

export const CategoryDriversDataTable = WithGoogleData(
  class extends React.Component<IWrappedComponentProps> {
    public render() {
      if (this.props.data.length) {
        const data = [...this.props.data];
        const secondHeaders = data.shift();
        const secondHeadersJSX = secondHeaders.map((header: string) => {
          return (
            <TableSubHeaderCell key={`firstHeader${header}`}>
              {header}{" "}
            </TableSubHeaderCell>
          );
        });

        const tableRows = data.map((serie: string[]) => {
          const serieName = serie.shift();
          const valueCells = serie.map((value: string, index: number) => {
            return (
              <TableCell key={`valueCell${serieName}${index}`}>
                {value}
              </TableCell>
            );
          });
          const cells = [
            <TableCell
              key={`serieName${serieName}`}
              style={{ fontWeight: 700 }}
            >
              {serieName}
            </TableCell>,
            ...valueCells
          ];
          return <TableRow key={`tableRow${serieName}`}>{cells}</TableRow>;
        });
        return (
          <Table padding={"dense"}>
            <TableBlueSubHeader>
              <TableRow style={{ height: 40 }}>{secondHeadersJSX}</TableRow>
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

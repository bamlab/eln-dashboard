import { Table, TableBody } from "@material-ui/core";
import * as React from "react";
import {
  IWrappedComponentProps,
  WithGoogleData
} from "../highOrderComponents/withGoogleData";
import { TableBlackCell } from "./table/TableBlackCell";
import { TableBlueCell } from "./table/TableBlueCell";
import { TableCell } from "./table/TableCell";
import { TableRow } from "./table/TableRow/TableRow";
import { TableTotalRow } from "./table/TableRow/TableTotalRow";
import { TableSubHeaderCell } from "./table/TableSubHeaderCell";

export const CategoryKPISTable = WithGoogleData(
  class extends React.Component<IWrappedComponentProps> {
    public render() {
      if (this.props.data.length) {
        const data = [...this.props.data];
        const firstHeader = data.shift();
        const firstHeaderJSX = firstHeader.map((header: string) => {
          return (
            <TableBlueCell key={`firstHeader${header}`}>{header}</TableBlueCell>
          );
        });
        const tableRows = data.map((serie: string[], line: number) => {
          if (serie.length === 1) {
            return (
              <TableTotalRow>
                <TableSubHeaderCell key={`firstHeader${serie[0]}`}>
                  {serie[0]}
                </TableSubHeaderCell>
                <TableSubHeaderCell />
                <TableSubHeaderCell />
                <TableSubHeaderCell />
                <TableSubHeaderCell />
                <TableSubHeaderCell />
                <TableSubHeaderCell />
              </TableTotalRow>
            );
          }
          const serieName = serie.shift();
          const secondSerieName = serie.shift();
          const valueCells = serie.map((value: string, index: number) => {
            return (
              <TableCell key={`valueCell${line}${index}`}>{value}</TableCell>
            );
          });
          const cells = [
            <TableBlueCell key={`serieName${line}`}>{serieName}</TableBlueCell>,
            <TableBlackCell key={`seconodSerieName${line}`}>
              {secondSerieName}
            </TableBlackCell>,
            ...valueCells
          ];
          return <TableRow key={`tableRow${line}`}>{cells}</TableRow>;
        });
        return (
          <Table padding={"dense"}>
            <TableBody>
              <TableRow style={{ height: 40 }}>{firstHeaderJSX}</TableRow>
              {tableRows}
            </TableBody>
          </Table>
        );
      }
      return null;
    }
  }
);

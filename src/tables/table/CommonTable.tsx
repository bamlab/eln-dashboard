import { Table, TableCell, TableRow } from "@material-ui/core";
import * as React from "react";
import { WithGoogleData } from "src/highOrderComponents/withGoogleData";
import { scheme } from "./tableScheme";

interface IProps {
  data: string[][];
  styleCells?: Array<Array<{}>>;
  styleRows?: Array<{}>;
}

export const CommonTable = WithGoogleData(
  class CustomTable extends React.Component<IProps> {
    public render() {
      const { data, styleRows, styleCells } = this.props;
      const table = [...data];
      const maxRowLength = Math.max(...data.map(row => row.length));

      // fill row with empty string in order to display empty cells
      table.map(row => {
        const rowLen = row.length;
        row.length = maxRowLength;
        row.fill("", rowLen, maxRowLength);
      });

      return (
        <Table padding="checkbox">
          {table.map((row, rowIndex) => (
            <TableRow
              key={`row${rowIndex}`}
              style={evaluateRowStyle(rowIndex, styleRows)}
            >
              {row.map((cell, cellIndex) => (
                <TableCell
                  key={`row${cellIndex}`}
                  style={evaluateCellStyle(
                    rowIndex,
                    cellIndex,
                    styleCells,
                    cell
                  )}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </Table>
      );
    }
  }
);

const evaluateRowStyle = (rowIndex: number, styleRows: any): any => {
  try {
    if (!styleRows[rowIndex]) {
      return evaluateRowStyle(styleRows.length - 1, rowIndex);
    }
    if (styleRows[rowIndex]) {
      return styleRows[rowIndex];
    } else {
      return evaluateRowStyle(rowIndex, styleRows);
    }
  } catch (e) {
    return scheme.rowDefault;
  }
};

const evaluateCellStyle = (
  rowIndex: number,
  cellIndex: number,
  styleCells: any,
  cell: string
): any => {
  try {
    if (!styleCells[rowIndex]) {
      return evaluateCellStyle(
        styleCells.length - 1,
        cellIndex,
        styleCells,
        cell
      );
    }
    if (styleCells[rowIndex][cellIndex]) {
      return styleCells[rowIndex][cellIndex](cell);
    } else {
      return evaluateCellStyle(
        rowIndex,
        styleCells[rowIndex].length - 1,
        styleCells,
        cell
      );
    }
  } catch (e) {
    return scheme.default(cell);
  }
};

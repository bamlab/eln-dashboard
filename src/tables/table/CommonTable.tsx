import {
  List,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@material-ui/core";
import * as React from "react";
import { WithGoogleData } from "src/highOrderComponents/withGoogleData";
import { CellCSSProperty, scheme } from "./tableScheme";

interface IProps {
  data: string[][];
  styleCells?: CellCSSProperty[][];
  styleRows?: CellCSSProperty[];
  width?: number;
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
        <Paper style={{ maxWidth: "100%", overflow: "auto" }}>
          <List style={{ padding: 0 }}>
            <Table
              padding="checkbox"
              style={{ width: this.props.width || "100%" }}
            >
              <TableBody>
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
              </TableBody>
            </Table>
          </List>
        </Paper>
      );
    }
  }
);

const evaluateRowStyle = (
  rowIndex: number,
  styleRows: CellCSSProperty[] | undefined
): React.CSSProperties => {
  if (!styleRows) {
    return scheme.rowDefault();
  }
  if (!styleRows[rowIndex]) {
    return evaluateRowStyle(styleRows.length - 1, styleRows);
  }
  if (styleRows[rowIndex]) {
    return styleRows[rowIndex]();
  } else {
    return evaluateRowStyle(rowIndex, styleRows);
  }
};

const evaluateCellStyle = (
  rowIndex: number,
  cellIndex: number,
  styleCells: CellCSSProperty[][] | undefined,
  cell: string
): React.CSSProperties => {
  try {
    if (!styleCells) {
      return scheme.cellDefault(cell);
    }
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
    return scheme.cellDefault(cell);
  }
};

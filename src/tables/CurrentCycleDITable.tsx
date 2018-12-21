import * as React from "react";
import { CommonTable } from "./table/CommonTable";
import { scheme } from "./table/tableScheme";

interface IProps {
  range: string;
}

export class CurrentCycleDITable extends React.Component<IProps> {
  public render() {
    const regularNumberRow = [scheme.cellDefault, scheme.cellRedBlack];
    const whiteNumberRow = [scheme.cellWhiteBold, scheme.cellWhiteGreyBold];
    return (
      <CommonTable
        range={this.props.range}
        styleRows={[
          scheme.rowDefault,
          scheme.rowBlue,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallDefault,
          scheme.rowSmallDefault,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallDefault,
          scheme.rowSmallDefault,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallDefault,
          scheme.rowSmallDefault,
          scheme.rowSmallDefault,
          scheme.rowSmallBlue
        ]}
        styleCells={[
          [scheme.cellBlueBoldNoWrap],
          [
            scheme.cellWhiteAlignRight,
            scheme.cellWhiteBoldAlignRight,
            scheme.cellWhiteAlignRight,
            scheme.cellWhiteBoldAlignRight,
            scheme.cellWhiteAlignRight,
            scheme.cellWhiteBoldAlignRight,
            scheme.cellWhiteAlignRight,
            scheme.cellWhiteBoldAlignRight,
            scheme.cellWhiteAlignRight,
            scheme.cellWhiteBoldAlignRight,
            scheme.cellWhiteAlignRight,
            scheme.cellWhiteBoldAlignRight,
            scheme.cellWhiteAlignRight,
            scheme.cellWhiteBoldAlignRight
          ],
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          whiteNumberRow
        ]}
      />
    );
  }
}

import * as React from "react";
import { CommonTable } from "./table/CommonTable";
import { scheme } from "./table/tableScheme";

interface IProps {
  range: string;
}

export class TradeFlowDC extends React.Component<IProps> {
  public render() {
    const regularNumberRow = [scheme.cellDefault, scheme.cellRedBlack];
    const boldNumberRow = [scheme.cellBlueBold, scheme.cellBlueRedBold];
    return (
      <CommonTable
        range={this.props.range}
        styleRows={[
          scheme.rowBlue,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallDefault,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallDefault,
          scheme.rowSmallDefault,
          scheme.rowBlue,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallDefault,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallDefault,
          scheme.rowSmallDefault
        ]}
        styleCells={[
          [scheme.cellWhiteBoldAlignRight],
          regularNumberRow,
          regularNumberRow,
          boldNumberRow,
          regularNumberRow,
          regularNumberRow,
          boldNumberRow,
          boldNumberRow,
          [scheme.cellWhiteBoldAlignRight],
          regularNumberRow,
          regularNumberRow,
          boldNumberRow,
          regularNumberRow,
          regularNumberRow,
          boldNumberRow,
          boldNumberRow
        ]}
      />
    );
  }
}

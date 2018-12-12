import * as React from "react";
import { CommonTable } from "./table/CommonTable";
import { scheme } from "./table/tableScheme";

interface IProps {
  range: string;
}

export class TradeFlowDC extends React.Component<IProps> {
  public render() {
    const regularNumberRow = [scheme.default, scheme.blackNumberCell];
    const boldNumberRow = [scheme.blueBold, scheme.boldBlueNumberCell];
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
          [scheme.whiteBoldAlignRight],
          regularNumberRow,
          regularNumberRow,
          boldNumberRow,
          regularNumberRow,
          regularNumberRow,
          boldNumberRow,
          boldNumberRow,
          [scheme.whiteBoldAlignRight],
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

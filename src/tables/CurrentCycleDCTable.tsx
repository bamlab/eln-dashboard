import * as React from "react";
import { CommonTable } from "./table/CommonTable";
import { scheme } from "./table/tableScheme";

interface IProps {
  range: string;
}

export class CurrentCycleDCTable extends React.Component<IProps> {
  public render() {
    const regularNumberRow = [scheme.default, scheme.blackNumberCell];
    const boldNumberRow = [scheme.blueBold, scheme.boldBlueNumberCell];
    const whiteNumberRow = [scheme.whiteBold, scheme.boldWhiteNumberCell];
    return (
      <CommonTable
        range={this.props.range}
        styleRows={[
          scheme.rowDefault,
          scheme.rowBlue,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallDefault,
          scheme.rowSmallDefault,
          scheme.rowSmallDefault,
          scheme.rowSmallDefault,
          scheme.rowSmallDefault,
          scheme.rowSmallDefault,
          scheme.rowSmallGrey,
          scheme.rowSmallBlue,
          scheme.rowSmallGrey,
          scheme.rowSmallBlue,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallGrey,
          scheme.rowSmallDefault,
          scheme.rowSmallGrey,
          scheme.rowSmallBlue
        ]}
        styleCells={[
          [scheme.blueBoldNoWrap],
          [
            scheme.whiteAlignRight,
            scheme.whiteAlignRight,
            scheme.whiteAlignRight,
            scheme.whiteAlignRight,
            scheme.whiteBoldAlignRight,
            scheme.whiteAlignRight,
            scheme.whiteBoldAlignRight,
            scheme.whiteAlignRight,
            scheme.whiteBoldAlignRight,
            scheme.whiteAlignRight
          ],
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          boldNumberRow,
          boldNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          boldNumberRow,
          boldNumberRow,
          boldNumberRow,
          whiteNumberRow,
          boldNumberRow,
          whiteNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          boldNumberRow,
          boldNumberRow,
          boldNumberRow,
          boldNumberRow,
          whiteNumberRow
        ]}
      />
    );
  }
}

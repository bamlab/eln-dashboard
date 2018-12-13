import * as React from "react";
import { CommonTable } from "./table/CommonTable";
import { scheme } from "./table/tableScheme";

interface IProps {
  range: string;
}

export class ForecastBiasTable extends React.Component<IProps> {
  public render() {
    const regularNumberRow = [
      scheme.cellDefault,
      scheme.cellRedBlack,
      scheme.cellRedBlack,
      scheme.cellRedGreen
    ];
    const boldNumberRow = [
      scheme.cellBlueBold,
      scheme.cellBlueRedBold,
      scheme.cellBlueRedBold,
      scheme.cellRedGreenBold
    ];
    return (
      <CommonTable
        range={this.props.range}
        styleRows={[
          scheme.rowBlue,
          scheme.rowSmallDefault,
          scheme.rowSmallDefault,
          scheme.rowSmallDefault,
          scheme.rowSmallDefault,
          scheme.rowSmallDefault,
          scheme.rowSmallGrey,
          scheme.rowSmallDefault,
          scheme.rowSmallDefault,
          scheme.rowSmallGrey
        ]}
        styleCells={[
          [scheme.cellWhiteBold, scheme.cellWhiteBoldAlignRight],
          boldNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          regularNumberRow,
          boldNumberRow
        ]}
      />
    );
  }
}

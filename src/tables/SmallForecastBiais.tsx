import * as React from "react";
import { CommonTable } from "./table/CommonTable";
import { scheme } from "./table/tableScheme";

interface IProps {
  range: string;
}

export class SmallForecastBiasTable extends React.Component<IProps> {
  public render() {
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
          scheme.rowSmallGrey
        ]}
        styleCells={[
          [scheme.cellWhiteBold, scheme.cellWhiteBoldAlignRight],
          boldNumberRow
        ]}
      />
    );
  }
}

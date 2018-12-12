import * as React from "react";
import { CommonTable } from "./table/CommonTable";
import { scheme } from "./table/tableScheme";

interface IProps {
  range: string;
}

export class ForecastBiasTable extends React.Component<IProps> {
  public render() {
    const regularNumberRow = [
      scheme.default,
      scheme.blackNumberCell,
      scheme.blackNumberCell,
      scheme.numberCell
    ];
    const boldNumberRow = [
      scheme.blueBold,
      scheme.boldBlueNumberCell,
      scheme.boldBlueNumberCell,
      scheme.boldNumberCell
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
          [scheme.whiteBold, scheme.whiteBoldAlignRight],
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

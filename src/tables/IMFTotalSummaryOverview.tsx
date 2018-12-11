import * as React from "react";
import { CommonTable } from "./table/CommonTable";
import { scheme } from "./table/tableScheme";

interface IProps {
  range: string;
}

export class IMFTotalSummaryOverview extends React.Component<IProps> {
  public render() {
    return (
      <CommonTable
        range={this.props.range}
        styleRows={[
          scheme.rowBlue,
          scheme.rowGrey,
          scheme.rowDefault,
          scheme.rowDefault,
          scheme.rowDefault,
          scheme.rowGrey,
          scheme.rowGrey,
          scheme.rowDefault,
          scheme.rowDefault,
          scheme.rowDefault,
          scheme.rowDefault,
          scheme.rowGrey,
          scheme.rowGrey,
          scheme.rowGrey,
          scheme.rowGrey
        ]}
        styleCells={[
          [scheme.whiteBold, scheme.whiteBold, scheme.whiteBoldAlignRight],
          [scheme.blueBold, scheme.default, scheme.numberCell]
        ]}
      />
    );
  }
}

import * as React from "react";
import { SelectorOutlined } from "./SelectorOutlined.component";

const years = ["All", "Channel", "Stage", "Label"];

const initialState = {
  selectedYear: years[0]
};

export class FieldDropdown extends React.Component<{}, typeof initialState> {
  public state = initialState;

  constructor(props: any) {
    super(props);
    this.onYearChange = this.onYearChange.bind(this);
  }

  public onYearChange(value: string) {
    this.state.selectedYear = value;
  }

  public render() {
    return (
      <SelectorOutlined
        onChange={this.onYearChange}
        valueList={years}
        defaultDisplayedValue={years[0]}
        iconColor="blue"
      />
    );
  }
}

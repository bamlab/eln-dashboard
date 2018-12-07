import * as React from "react";
import { SelectorOutlined } from "./SelectorOutlined.component";

const years = ["2015", "2016", "2017", "2018", "2019", "2020", "2021"];

const initialState = {
  selectedYear: years[0]
};

export class YearDropdown extends React.Component<{}, typeof initialState> {
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
        defaultDisplayedValue={years[4]}
        iconColor="blue"
      />
    );
  }
}

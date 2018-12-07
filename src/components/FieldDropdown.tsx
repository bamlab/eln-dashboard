import * as React from "react";
import { SelectorOutlined } from "./SelectorOutlined.component";

const fields = ["All", "Channel", "Stage", "Label"];

const initialState = {
  selectedField: fields[0]
};

export class FieldDropdown extends React.Component<{}, typeof initialState> {
  public state = initialState;

  constructor(props: any) {
    super(props);
    this.onYearChange = this.onYearChange.bind(this);
  }

  public onYearChange(value: string) {
    this.state.selectedField = value;
  }

  public render() {
    return (
      <SelectorOutlined
        onChange={this.onYearChange}
        valueList={fields}
        defaultDisplayedValue={fields[0]}
        iconColor="blue"
      />
    );
  }
}

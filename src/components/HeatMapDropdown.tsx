import * as React from "react";
import { SelectorOutlined } from "./SelectorOutlined.component";

const fields = [
  "Stage",
  "Channel",
  "Stage",
  "Label",
  "Price Tier",
  "City Tier"
];

const HeatMapDropdownCreator = (axis: string) => {
  const componentFields = fields.map(field => `${axis}-axis: ${field}`);
  const initialState = {
    selectedField: componentFields[0]
  };
  return class extends React.Component<{}, typeof initialState> {
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
          valueList={componentFields}
          defaultDisplayedValue={componentFields[0]}
          iconColor="blue"
        />
      );
    }
  };
};

export const XAxisHeatMapDropdown = HeatMapDropdownCreator("X");
export const YAxisHeatMapDropdown = HeatMapDropdownCreator("Y");

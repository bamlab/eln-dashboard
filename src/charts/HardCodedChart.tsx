import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Data = require("highcharts/modules/data");
import * as React from "react";

Data(Highcharts);

interface IData {
  name: string;
  data: number[];
  stack: string;
  color: string;
  tag: string;
}

interface IProps {
  chartData: IData[];
}

const getChartOptions = (chartData: IData[]): Highcharts.Options => ({
  chart: {
    type: "column"
  },

  title: {
    text: null
  },

  xAxis: {
    categories: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  },

  yAxis: {
    gridLineWidth: 0,
    title: null,
    allowDecimals: false,
    min: 0
  },
  legend: {
    enabled: false
  },

  tooltip: {
    formatter() {
      // @ts-ignore
      const { userOptions } = this.series;
      // @ts-ignore
      return `${userOptions.name && userOptions.name + " -"} ${this.key} ${
        userOptions.stack
      }: ${
        // @ts-ignore
        this.point.y
      }`;
    }
  },

  plotOptions: {
    column: {
      stacking: "normal"
    }
  },

  series: chartData
});

export class HardCodedChart extends React.PureComponent<IProps> {
  public render() {
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={getChartOptions(this.props.chartData)}
        />
      </div>
    );
  }
}

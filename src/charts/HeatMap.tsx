import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const HCMAP = require("highcharts/modules/map");
import * as React from "react";
import { WithGoogleData } from "src/highOrderComponents/withGoogleData";

HCMAP(Highcharts);

const waterfallDataMapper = (
  accumulator: any,
  serie: string[],
  index: number
) => {
  accumulator.xNames =
    index === 0 ? accumulator.xNames : [...accumulator.xNames, serie[0]];
  accumulator.yNames = index === 0 ? serie.slice(1) : accumulator.yNames;
  const dataArray = serie
    .slice(1)
    .map((el, secondIndex) => [secondIndex, index - 1, Number(el)]);
  accumulator.data = index === 0 ? [] : [...accumulator.data, ...dataArray];
  return accumulator;
};

const getChartOptions = (waterfallData: any) => ({
  chart: {
    type: "heatmap",
    marginTop: 40,
    marginBottom: 80,
    plotBorderWidth: 1
  },

  title: {
    text: null
  },

  xAxis: {
    categories: waterfallData.yNames
  },

  yAxis: {
    categories: waterfallData.xNames,
    title: null
  },

  colorAxis: {
    min: 0,
    minColor: "#A1DAF7",
    maxColor: "#026AB5"
  },
  legend: false,

  series: [
    {
      name: "Sales per employee",
      borderWidth: 1,
      data: waterfallData.data,
      dataLabels: {
        enabled: true,
        color: "#000000"
      }
    }
  ]
});

interface IProps {
  data: any[];
  customOptions?: any;
}

export const HeatMap = WithGoogleData(
  class extends React.PureComponent<IProps> {
    public state = { data: [] };

    public render() {
      if (this.props.data.length) {
        const waterfallData = this.props.data.reduce(waterfallDataMapper, {
          xNames: [],
          yNames: [],
          data: []
        });
        return (
          <div>
            <HighchartsReact
              highcharts={Highcharts}
              options={getChartOptions(waterfallData)}
            />
          </div>
        );
      }
      return null;
    }
  }
);

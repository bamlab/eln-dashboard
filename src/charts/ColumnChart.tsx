import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Data = require("highcharts/modules/data");
import * as React from "react";
import { WithGoogleData } from "src/highOrderComponents/withGoogleData";
Data(Highcharts);

const columnChartDataMapper = (serie: string[], index: number) => {
  const value = Number(serie[1]);
  return {
    month: serie[0],
    y: value
  };
};
const getChartOptions = (
  data: Array<{ month: string; y: number; color?: string }>
) => ({
  title: {
    text: null
  },
  chart: {
    type: "column",
    scrollablePlotArea: {
      minWidth: 700,
      scrollPositionX: 1
    }
  },
  xAxis: {
    categories: data.map(el => el.month),
    lineWidth: 0,
    tickWidth: 0
  },
  yAxis: {
    gridLineWidth: 0,
    title: null
  },
  plotOptions: {
    column: {
      stacking: "normal",
      color: "#026AB5",
      borderRadius: 3,
      states: {
        hover: { color: "#029FE3" }
      }
    }
  },
  series: [
    {
      data,
      type: "column",
      color: "#026AB5",
      showInLegend: false
    }
  ]
});

interface IProps {
  data: any[];
}

export const ColumnChart = WithGoogleData(
  class extends React.PureComponent<IProps> {
    public render() {
      if (this.props.data) {
        const columnChartData = this.props.data
          .slice(1)
          .map(columnChartDataMapper);
        return (
          <div>
            <HighchartsReact
              highcharts={Highcharts}
              options={getChartOptions(columnChartData)}
            />
          </div>
        );
      }
      return null;
    }
  }
);

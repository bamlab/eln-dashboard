import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Data = require("highcharts/modules/data");
import * as React from "react";
import { WithGoogleData } from "src/highOrderComponents/withGoogleData";

Data(Highcharts);

const lineChartDataMapper = (serie: string[], index: number) => {
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
    type: "lines",
    scrollablePlotArea: {
      minWidth: 700,
      scrollPositionX: 1
    }
  },
  xAxis: {
    categories: data.map(el => el.month),
    type: "datetime",
    tickWidth: 0
  },
  yAxis: {
    gridLineWidth: 0,
    title: null,
    labels: {
      format: "{value}%"
    }
  },
  plotOptions: { line: { marker: { enabled: false } } },
  tooltip: {
    formatter() {
      const self: any = this as any;
      return `${Math.floor(self.y)}%`;
    }
  },
  series: [
    {
      data,
      type: "line",
      color: "#026AB5",
      showInLegend: false
    }
  ]
});

interface IProps {
  data: any[];
}

export const LineChart = WithGoogleData(
  class extends React.PureComponent<IProps> {
    public render() {
      if (this.props.data) {
        const lineChartData = this.props.data.slice(1).map(lineChartDataMapper);
        return (
          <div>
            <HighchartsReact
              highcharts={Highcharts}
              options={getChartOptions(lineChartData)}
            />
          </div>
        );
      }
      return null;
    }
  }
);

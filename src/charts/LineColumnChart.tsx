import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Data = require("highcharts/modules/data");
import * as React from "react";
import { WithGoogleData } from "src/highOrderComponents/withGoogleData";
import { colors } from "src/theme";

Data(Highcharts);

const waterfallDataMapper = (serie: string[], index: number) => {
  const value = Number(serie[2]);
  let color = colors.mainColor;
  if (value > 0) {
    color = colors.secondaryColor;
  }
  if (index === 0) {
    color = colors.successColor;
  }

  return {
    date: serie[0],
    name: serie[1],
    y: value,
    color
  };
};

const getChartOptions = (
  waterfallData: Array<{
    name: string;
    y: number;
    date: string;
    color?: string;
  }>
) => ({
  title: null,
  chart: {
    type: "lines",
    scrollablePlotArea: {
      minWidth: 700,
      scrollPositionX: 1
    }
  },
  plotOptions: { line: { marker: { enabled: false } } },
  xAxis: {
    categories: Array.from(new Set(waterfallData.map(el => el.date))),
    tickWidth: 0
  },
  yAxis: {
    gridLineWidth: 0,
    plotLines: [
      {
        width: 1,
        color: "olive",
        value: 0,
        zIndex: 10
      }
    ],
    title: null,
    labels: {
      formatter() {
        const self: any = this as any;
        return `${Math.floor(self.value)}%`;
      }
    }
  },
  tooltip: {
    formatter() {
      const self: any = this as any;
      return `${Math.floor(self.y)}%`;
    }
  },
  series: [
    {
      data: waterfallData
        .filter(el => el.name === "Direct China TTL (M-1)")
        .map(el => el.y),
      type: "column",
      color: "#A1DAF7",
      name: "Direct China TTL (M-1)"
    },

    {
      data: waterfallData
        .filter(el => el.name === "Direct China TTL(Rolling 3M)")

        .map(el => el.y),
      type: "column",
      color: "#026AB5",
      name: "Direct China TTL(Rolling 3M)"
    },
    {
      data: waterfallData
        .filter(el => el.name === "Direct China TTL (M-5)")
        .map(el => el.y),
      type: "line",
      color: "#65A124",
      name: "Direct China TTL (M-5)"
    }
  ]
});

interface IProps {
  data: any[];
}

export const LineColumnChart = WithGoogleData(
  class extends React.PureComponent<IProps> {
    public state = { data: [] };

    public render() {
      if (this.props.data) {
        const waterfallData = this.props.data.slice(1).map(waterfallDataMapper);
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

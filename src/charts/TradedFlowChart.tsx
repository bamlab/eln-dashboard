import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Data = require("highcharts/modules/data");
import * as React from "react";
import { WithGoogleData } from "src/highOrderComponents/withGoogleData";
import { colors } from "src/theme";

const quarterArray = [
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
  ["34%", "11.0"],
  ["25%", "11.5"],
  ["60%", "13.2"],
  ["65%", "13.3"],
  ["3%", "13.4"],
  ["7%", "14.3"],
  ["34%", "14.7"],
  ["14%", "14.8"],
  ["20%", "15.1"],
  ["8%", "15.3"],
  ["20%", "15.5"],
  ["8%", "15.6"],
  ["5%", "15.6"],
  ["10%", "16.0"],
  ["5%", "16.1"],
  ["6%", "16.3"]
];

Data(Highcharts);

const dataReducer = (
  tradedFlowSeries: ReadonlyArray<ISerie>,
  values: string[]
) => {
  const tradedFlowSeriesCopy = [...tradedFlowSeries];
  const valuesCopy = [...values];
  const date = valuesCopy.shift() || "";
  valuesCopy.reduce((tradedFlowSeries2, value: string, serieIndex: number) => {
    tradedFlowSeries2[serieIndex].data.push([date, Number(value)]);
    return tradedFlowSeries2;
  }, tradedFlowSeriesCopy);
  return tradedFlowSeriesCopy;
};

interface ISerie {
  data: Array<[string, number]>;
  type: string;
  color: string;
  name: string;
}

const getChartOptions = (
  tradedFlowSeries: ReadonlyArray<ISerie>,
  customOptions: Highcharts.Options,
  isStacked: boolean = true
): Highcharts.Options => ({
  title: undefined,
  chart: {
    // @ts-ignore
    scrollablePlotArea: {
      minWidth: tradedFlowSeries[0].data.length * 40,
      scrollPositionX: 0
    }
  },
  plotOptions: {
    line: { marker: { enabled: false } },
    column: {
      stacking: isStacked ? "normal" : null,
      borderRadius: 3,
      states: {
        hover: { color: "#029FE3" }
      }
    }
  },
  // @ts-ignore
  xAxis: {
    categories: Array.from(new Set(tradedFlowSeries[0].data.map(el => el[0]))),
    tickWidth: 0,
    labels: {
      autoRotation: 0,
      useHTML: true,
      formatter() {
        return (
          // @ts-ignore
          quarterArray[this.pos][0] &&
          `<div style="display:flex;flex-direction:column;align-items:center;">
      <div>${this.value}</div>
      <div style="height: 19px;	width: 30px;	border-radius: 3px;	background-color: #99C3E1;text-align:center;line-height:19px;margin-top:8px;color: #002677;font-weight:bold;">${
        // @ts-ignore
        quarterArray[this.pos][0]
      }</div>
      <div style="height: 19px;	width: 30px;	border-radius: 3px;	background-color: #A1DAF7;text-align:center;line-height:19px;margin-top:4px;color: #002677;font-weight:bold;">${
        // @ts-ignore
        quarterArray[this.pos][1]
      }</div>
      </div>`
        );
      }
    }
  },
  yAxis: {
    gridLineWidth: 0,
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
  series: [...tradedFlowSeries],
  ...customOptions
});

interface IProps {
  data: any[];
  customOptions?: any & Partial<Highcharts.Options>;
  isStacked?: boolean;
}

export const ColumnLineChart = WithGoogleData(
  class extends React.PureComponent<IProps> {
    public state = { data: [] };

    public render() {
      if (this.props.data.length) {
        const data = [...this.props.data];
        const serieColors = data.shift().slice(1);
        const serieTypes = data.shift().slice(1);
        const serieNames = data.shift().slice(1);

        const tradedFlowSeries: ISerie[] = serieNames.map(
          (serieName: string, index: number) => {
            return {
              name: serieName,
              color: colors[serieColors[index]],
              type: serieTypes[index],
              data: []
            };
          }
        );

        data.reduce(dataReducer, tradedFlowSeries);
        return (
          <div>
            <HighchartsReact
              highcharts={Highcharts}
              options={getChartOptions(
                tradedFlowSeries,
                this.props.customOptions,
                this.props.isStacked
              )}
            />
          </div>
        );
      }
      return null;
    }
  }
);

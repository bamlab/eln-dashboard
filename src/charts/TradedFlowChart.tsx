import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Data = require("highcharts/modules/data");
import * as React from "react";
import { WithGoogleData } from "src/highOrderComponents/withGoogleData";
import { colors } from "src/theme";

Data(Highcharts);

const dataReducer = (tradedFlowSeries: ISerie[], values: string[]) => {
  const date = values.shift() || "";
  values.reduce((tradedFlowSeries2, value: string, serieIndex: number) => {
    tradedFlowSeries2[serieIndex].data.push([date, Number(value)]);
    return tradedFlowSeries2;
  }, tradedFlowSeries);
  return tradedFlowSeries;
};

interface ISerie {
  data: Array<[string, number]>;
  type: string;
  color: string;
  name: string;
}

const getChartOptions = (
  tradedFlowSeries: ISerie[],
  customOptions: Highcharts.Options
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
      stacking: "normal",
      borderRadius: 3,
      states: {
        hover: { color: "#029FE3" }
      }
    }
  },
  xAxis: {
    categories: Array.from(new Set(tradedFlowSeries[0].data.map(el => el[0]))),
    tickWidth: 0
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
  series: tradedFlowSeries,
  ...customOptions
});

interface IProps {
  data: any[];
  customOptions?: any;
}

export const TradeFlowChart = WithGoogleData(
  class extends React.PureComponent<IProps> {
    public state = { data: [] };

    public render() {
      console.log(this.props);
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
                this.props.customOptions
              )}
            />
          </div>
        );
      }
      return null;
    }
  }
);

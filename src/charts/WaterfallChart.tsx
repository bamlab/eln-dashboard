import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import * as React from "react";
import { colors } from "src/theme";
const highchartsMore = require("highcharts-more");
import { WithGoogleData } from "src/highOrderComponents/withGoogleData";

highchartsMore(Highcharts);

const waterfallDataMapper = (serie: string[], index: number) => {
  const value = Number(serie[1]);
  const isSum = serie[2] === "TRUE";
  let color = colors.mainColor;
  if (value > 0) {
    color = colors.secondaryColor;
  }
  if (index === 0 || isSum) {
    color = colors.successColor;
  }

  return {
    name: serie[0],
    y: value,
    isSum,
    color
  };
};

const getChartOptions = (
  waterfallData: Array<{ name: string; y: number; color?: string }>
) => ({
  chart: {
    type: "waterfall"
  },
  title: null,
  plotOptions: {
    waterfall: {
      borderRadius: 3,
      borderWidth: 0,
      lineWidth: 0,
      groupPadding: 0,
      pointPadding: 0
    }
  },
  legend: {
    enabled: false
  },
  xAxis: {
    type: "category"
  },
  yAxis: {
    min: 60,
    gridLineWidth: 0
  },
  series: [
    {
      data: waterfallData,
      color: colors.mainColor,
      dataLabels: {
        enabled: true,
        formatter(): any {
          const self = this as any;
          return self.y;
        },
        style: {
          fontWeight: "bold",
          color: "white",
          fontSize: 16
        }
      }
    }
  ]
});

interface IProps {
  data: any[];
}

export const WaterfallChart = WithGoogleData(
  class extends React.PureComponent<IProps> {
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

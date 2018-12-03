import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import * as React from "react";
import { colors } from "src/theme";
const highchartsMore = require("highcharts-more");
import { WithGoogleClient } from "src/highOrderComponents/withGoogleClient";

highchartsMore(Highcharts);

const hardcodedData = [
  { name: "Sep Cycle 2108 TTL IL offtake", y: 63, color: colors.successColor },
  { name: "ANZ IL Offtake", y: 0.8811, color: colors.secondaryColor },
  { name: "CE IL Offtake", y: -1.2188 },
  { name: "NL IL Offtake", y: -0.5789 },
  { name: "UK IL Offtake", y: -1.002 },
  {
    name: "Sep Cycle 2109 TTL IL offtake",
    y: 61.0814,
    isSum: true,
    color: colors.successColor
  }
];

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

export const WaterfallChart = WithGoogleClient(
  class extends React.PureComponent<IProps> {
    public state = { data: [] };

    public async componentDidMount() {
      this.setState({ data: hardcodedData });
    }

    public render() {
      console.log(this.props.data);
      return (
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={getChartOptions(this.state.data)}
          />
        </div>
      );
    }
  }
);

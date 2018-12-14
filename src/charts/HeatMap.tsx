import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const HCMAP = require("highcharts/modules/map");
import * as React from "react";
import { CustomSlider } from "src/components/CustomSlider";
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
        color: "#000000",
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
  customOptions?: any;
}

interface IState {
  data: any[];
  selectedData: any[];
}

const list = [
  "2015-01",
  "2015-02",
  "2015-03",
  "2015-04",
  "2015-05",
  "2015-06",
  "2015-07",
  "2015-08",
  "2015-09",
  "2015-10",
  "2015-11",
  "2015-12",
  "2016-01",
  "2016-02",
  "2016-03",
  "2016-04",
  "2016-05",
  "2016-06",
  "2016-07",
  "2016-08",
  "2016-09",
  "2016-10",
  "2016-11",
  "2016-12",
  "2017-01",
  "2017-02",
  "2017-03",
  "2017-04",
  "2017-05",
  "2017-06",
  "2017-07",
  "2017-08",
  "2017-09",
  "2017-10",
  "2017-11",
  "2017-12",
  "2018-01",
  "2018-02",
  "2018-03",
  "2018-04",
  "2018-05",
  "2018-06",
  "2018-07",
  "2018-08",
  "2018-09",
  "2018-10",
  "2018-11",
  "2018-12"
];

export const HeatMap = WithGoogleData(
  class extends React.PureComponent<IProps, IState> {
    constructor(props: any) {
      super(props);
      this.state = { data: [...this.props.data], selectedData: [] };
    }

    public componentDidUpdate = () => {
      this.setState({ data: this.props.data }, () => {
        if (this.state.selectedData.length === 0) {
          this.setState({ selectedData: this.state.data });
        }
      });
    };

    public refreshData = (num: number) => {
      const newData = this.state.data.map((row: string[]) => {
        return row.map((value: string) => {
          if (isNaN(Number(value))) {
            return value;
          } else {
            return Math.ceil(Number(value) * Math.random());
          }
        });
      });
      this.setState({ selectedData: newData });
    };

    public render() {
      if (this.state.data.length) {
        const waterfallData = this.state.selectedData.reduce(
          waterfallDataMapper,
          {
            xNames: [],
            yNames: [],
            data: []
          }
        );
        return (
          <div>
            <HighchartsReact
              highcharts={Highcharts}
              options={getChartOptions(waterfallData)}
            />
            <CustomSlider list={list} onChange={this.refreshData} />
          </div>
        );
      }
      return null;
    }
  }
);

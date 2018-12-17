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

const list = {
  "2015-01": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2015-02": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2015-03": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2015-04": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2015-05": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2015-06": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2015-07": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2015-08": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2015-09": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2015-10": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2015-11": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2015-12": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2016-01": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2016-02": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2016-03": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2016-04": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2016-05": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2016-06": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2016-07": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2016-08": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2016-09": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2016-10": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2016-11": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2016-12": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2017-01": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2017-02": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2017-03": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2017-04": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2017-05": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2017-06": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2017-07": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2017-08": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2017-09": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2017-10": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2017-11": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2017-12": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2018-01": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2018-02": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2018-03": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2018-04": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2018-05": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2018-06": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2018-07": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2018-08": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2018-09": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2018-10": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2018-11": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ],
  "2018-12": [
    ["", "IF", "FO", "GUM"],
    ["CL", "3", "5", "17"],
    ["IL", "1", "2", "3"]
  ]
};

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
      const newData = list[Object.keys(list)[num]];
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
            <CustomSlider
              list={Object.keys(list)}
              onChange={this.refreshData}
            />
          </div>
        );
      }
      return null;
    }
  }
);

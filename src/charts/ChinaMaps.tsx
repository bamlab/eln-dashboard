const Highcharts = require("highcharts/highmaps");
import HighchartsReact from "highcharts-react-official";
import * as React from "react";

import { chinaHighChartMap } from "../data/china";

const data = [
  ["cn-3664", 0],
  ["cn-gd", 1],
  ["cn-sh", 2],
  ["cn-zj", 3],
  ["cn-ha", 4],
  ["cn-xz", 5],
  ["cn-yn", 6],
  ["cn-ah", 7],
  ["cn-hu", 8],
  ["cn-sa", 9],
  ["cn-cq", 10],
  ["cn-gz", 11],
  ["cn-hn", 12],
  ["cn-sc", 13],
  ["cn-sx", 14],
  ["cn-he", 15],
  ["cn-jx", 16],
  ["cn-nm", 17],
  ["cn-gx", 18],
  ["cn-hl", 19],
  ["cn-fj", 20],
  ["cn-bj", 21],
  ["cn-hb", 22],
  ["cn-ln", 23],
  ["cn-sd", 24],
  ["cn-tj", 25],
  ["cn-js", 26],
  ["cn-qh", 27],
  ["cn-gs", 28],
  ["cn-xj", 29],
  ["cn-jl", 30],
  ["cn-nx", 31]
];

const options = {
  chart: {
    type: "map",
    map: Highcharts.geojson(chinaHighChartMap)
  },
  title: null,
  legend: {
    enabled: false
  },
  plotOptions: {
    map: {
      allAreas: false
    }
  },
  series: [
    {
      data
    }
  ]
};

interface IProps {
  data?: any[];
  customOptions?: any;
}

export class ChinaMap extends React.PureComponent<IProps> {
  public render() {
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"mapChart"}
          options={options}
        />
      </div>
    );
  }
}

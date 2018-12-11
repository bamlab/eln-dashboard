const Highcharts = require("highcharts/highmaps");
import HighchartsReact from "highcharts-react-official";
import * as React from "react";
import { colors } from "src/theme";

const data = [
  ["tw-ph", 0],
  ["cn-sh", 1],
  ["tw-km", 0],
  ["cn-zj", 3],
  ["tw-lk", 0],
  ["cn-3664", 5],
  ["cn-3681", 6],
  ["cn-fj", 7],
  ["cn-gd", 8],
  ["tw-tw", 0],
  ["tw-cs", 0],
  ["cn-6657", 11],
  ["cn-6663", 12],
  ["cn-6665", 13],
  ["cn-6666", 14],
  ["cn-6667", 15],
  ["cn-6669", 16],
  ["cn-6670", 17],
  ["cn-6671", 18],
  ["tw-kh", 0],
  ["tw-hs", 0],
  ["cn-yn", 21],
  ["cn-xz", 22],
  ["tw-hh", 0],
  ["tw-cl", 0],
  ["tw-ml", 0],
  ["cn-nx", 26],
  ["cn-sa", 27],
  ["tw-ty", 0],
  ["cn-3682", 29],
  ["tw-cg", 0],
  ["cn-6655", 31],
  ["cn-ah", 32],
  ["cn-hu", 33],
  ["tw-hl", 0],
  ["tw-th", 0],
  ["cn-6656", 36],
  ["tw-nt", 0],
  ["cn-6658", 38],
  ["cn-6659", 39],
  ["cn-cq", 40],
  ["cn-hn", 41],
  ["tw-yl", 0],
  ["cn-6660", 43],
  ["cn-6661", 44],
  ["cn-6662", 45],
  ["cn-6664", 46],
  ["cn-6668", 47],
  ["tw-pt", 0],
  ["tw-tt", 0],
  ["tw-tn", 0],
  ["cn-bj", 51],
  ["cn-hb", 52],
  ["tw-il", 0],
  ["tw-tp", 0],
  ["cn-sd", 55],
  ["tw-ch", 0],
  ["cn-tj", 57],
  ["cn-ha", 58],
  ["cn-jl", 59],
  ["cn-qh", 60],
  ["cn-xj", 61],
  ["cn-nm", 62],
  ["cn-hl", 63],
  ["cn-sc", 64],
  ["cn-gz", 65],
  ["cn-gx", 66],
  ["cn-ln", 67],
  ["cn-js", 68],
  ["cn-gs", 69],
  ["cn-sx", 70],
  ["cn-he", 71],
  ["cn-jx", 72]
];

const options = {
  chart: {
    type: "map",
    map: Highcharts.geojson(require("../data/cn-all-sar-taiwan.geo.json"))
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
  colorAxis: {
    min: 1,
    type: "linear",
    minColor: colors.secondaryColor,
    maxColor: colors.mainColor,
    stops: [
      [0, colors.backgroundSecondaryColor],
      [0.1, colors.accentColor],
      [0.5, colors.accentColor],
      [1, colors.secondaryColor]
    ]
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

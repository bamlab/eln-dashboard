const Highcharts = require("highcharts/highmaps");
import HighchartsReact from "highcharts-react-official";
import * as React from "react";
import { colors } from "src/theme";

const data = [
  ["cn-3664", 0],
  ["cn-3681", 0],
  ["cn-3682", 0],
  ["cn-6655", 0],
  ["cn-6656", 0],
  ["cn-6657", 0],
  ["cn-6658", 0],
  ["cn-6659", 0],
  ["cn-6660", 0],
  ["cn-6661", 0],
  ["cn-6662", 0],
  ["cn-6663", 0],
  ["cn-6664", 0],
  ["cn-6665", 0],
  ["cn-6666", 0],
  ["cn-6667", 0],
  ["cn-6668", 0],
  ["cn-6669", 0],
  ["cn-6670", 0],
  ["cn-6671", 0],
  ["cn-ah", 32],
  ["cn-bj", 51],
  ["cn-cq", 40],
  ["cn-fj", 7],
  ["cn-gd", 8],
  ["cn-gs", 69],
  ["cn-gx", 66],
  ["cn-gz", 65],
  ["cn-ha", 58],
  ["cn-hb", 52],
  ["cn-he", 71],
  ["cn-hl", 63],
  ["cn-hn", 41],
  ["cn-hu", 33],
  ["cn-jl", 59],
  ["cn-js", 68],
  ["cn-jx", 72],
  ["cn-ln", 67],
  ["cn-nm", 62],
  ["cn-nx", 26],
  ["cn-qh", 60],
  ["cn-sa", 27],
  ["cn-sc", 64],
  ["cn-sd", 55],
  ["cn-sh", 1],
  ["cn-sx", 70],
  ["cn-tj", 57],
  ["cn-xj", 61],
  ["cn-xz", 22],
  ["cn-yn", 21],
  ["cn-zj", 3],
  ["tw-cg", 0],
  ["tw-ch", 0],
  ["tw-cl", 0],
  ["tw-cs", 0],
  ["tw-hh", 0],
  ["tw-hl", 0],
  ["tw-hs", 0],
  ["tw-il", 0],
  ["tw-kh", 0],
  ["tw-km", 0],
  ["tw-lk", 0],
  ["tw-ml", 0],
  ["tw-nt", 0],
  ["tw-ph", 0],
  ["tw-pt", 0],
  ["tw-th", 0],
  ["tw-tn", 0],
  ["tw-tp", 0],
  ["tw-tt", 0],
  ["tw-tw", 0],
  ["tw-ty", 0],
  ["tw-yl", 0]
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

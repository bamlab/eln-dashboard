const Highcharts = require("highcharts/highmaps");
import HighchartsReact from "highcharts-react-official";
import * as React from "react";

const data = [
  ["tw-ph", 0],
  ["cn-sh", 1],
  ["tw-km", 2],
  ["cn-zj", 3],
  ["tw-lk", 4],
  ["cn-3664", 5],
  ["cn-3681", 6],
  ["cn-fj", 7],
  ["cn-gd", 8],
  ["tw-tw", 9],
  ["tw-cs", 10],
  ["cn-6657", 11],
  ["cn-6663", 12],
  ["cn-6665", 13],
  ["cn-6666", 14],
  ["cn-6667", 15],
  ["cn-6669", 16],
  ["cn-6670", 17],
  ["cn-6671", 18],
  ["tw-kh", 19],
  ["tw-hs", 20],
  ["cn-yn", 21],
  ["cn-xz", 22],
  ["tw-hh", 23],
  ["tw-cl", 24],
  ["tw-ml", 25],
  ["cn-nx", 26],
  ["cn-sa", 27],
  ["tw-ty", 28],
  ["cn-3682", 29],
  ["tw-cg", 30],
  ["cn-6655", 31],
  ["cn-ah", 32],
  ["cn-hu", 33],
  ["tw-hl", 34],
  ["tw-th", 35],
  ["cn-6656", 36],
  ["tw-nt", 37],
  ["cn-6658", 38],
  ["cn-6659", 39],
  ["cn-cq", 40],
  ["cn-hn", 41],
  ["tw-yl", 42],
  ["cn-6660", 43],
  ["cn-6661", 44],
  ["cn-6662", 45],
  ["cn-6664", 46],
  ["cn-6668", 47],
  ["tw-pt", 48],
  ["tw-tt", 49],
  ["tw-tn", 50],
  ["cn-bj", 51],
  ["cn-hb", 52],
  ["tw-il", 53],
  ["tw-tp", 54],
  ["cn-sd", 55],
  ["tw-ch", 56],
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

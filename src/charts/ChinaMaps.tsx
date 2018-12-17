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
  ["cn-ah", 3017.103],
  ["cn-bj", 3014.744],
  ["cn-cq", 994.936],
  ["cn-fj", 2640.911],
  ["cn-gd", 12191.549],
  ["cn-gs", 0],
  ["cn-gx", 0],
  ["cn-gz", 0],
  ["cn-ha", 2410.918],
  ["cn-hb", 0],
  ["cn-hb", 3052.186],
  ["cn-he", 2147.904],
  ["cn-hi", 0],
  ["cn-hk", 0],
  ["cn-hl", 916.716],
  ["cn-hn", 1230.912],
  ["cn-hu", 0],
  ["cn-jl", 330.605],
  ["cn-js", 5726.572],
  ["cn-jx", 1403.814],
  ["cn-ln", 1281.636],
  ["cn-mo", 0],
  ["cn-nm", 0],
  ["cn-nx", 0],
  ["cn-qh", 0],
  ["cn-sa", 0],
  ["cn-sc", 2982.75],
  ["cn-sd", 4763.901],
  ["cn-sh", 2381.647],
  ["cn-sn", 2517.51],
  ["cn-sx", 1015.054],
  ["cn-tj", 710.263],
  ["cn-tw", 0],
  ["cn-xj", 0],
  ["cn-xz", 0],
  ["cn-yn", 0],
  ["cn-zj", 2817.651],
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

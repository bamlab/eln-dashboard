import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Data = require("highcharts/modules/data");
import * as Luxon from "luxon";
import * as React from "react";
import { json } from "../data/model_prediction_template";

Data(Highcharts);

const serieWithTimestamp = json.map(serie => {
  const luxonDate = Luxon.DateTime.fromFormat(serie.Date, "M/d/yyyy");
  return [luxonDate.toMillis(), serie.FO_CL_EC_BD / 80] as [number, number];
});

const serie2WithTimestamp = json.map(serie => {
  const luxonDate = Luxon.DateTime.fromFormat(serie.Date, "M/d/yyyy");
  const isNegative: number = Math.random() >= 0.5 ? 1 : -1;
  return [luxonDate.toMillis(), (isNegative * serie.GU_IL_EC_KA) / 80] as [
    number,
    number
  ];
});
const serie3WithTimestamp = json.map(serie => {
  const luxonDate = Luxon.DateTime.fromFormat(serie.Date, "M/d/yyyy");
  const isNegative: number = Math.random() >= 0.5 ? 1 : -1;
  return [luxonDate.toMillis(), (isNegative * serie.IF_IL_EC_BD) / 80] as [
    number,
    number
  ];
});

const options: any = {
  title: {
    text: "Total DC Take-Off Bias",
    align: "left"
  },
  chart: {
    type: "lines",
    scrollablePlotArea: {
      minWidth: 700,
      scrollPositionX: 1
    }
  },
  xAxis: {
    type: "datetime",
    tickWidth: 0
  },
  yAxis: {
    gridLineWidth: 0,
    plotLines: [
      {
        width: 1,
        color: "olive",
        value: 0,
        zIndex: 10
      }
    ],
    title: null,
    labels: {
      format: "{value}%"
    }
  },
  tooltip: {
    formatter() {
      const self: any = this as any;
      return `${Math.floor(self.y)}%`;
    }
  },
  series: [
    {
      data: serie2WithTimestamp,
      type: "column",
      color: "#A1DAF7"
    },
    {
      data: serie3WithTimestamp,
      type: "column",
      color: "#026AB5"
    },
    {
      data: serieWithTimestamp,
      type: "line",
      color: "#65A124"
    }
  ]
};

export const LineColumnChart = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

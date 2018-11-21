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
  return [luxonDate.toMillis(), serie.GU_IL_EC_KA / 80] as [number, number];
});

const options: any = {
  title: {
    text: "Total DC Take-Off Forecast Accuracy",
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
    lineWidth: 0,
    tickWidth: 0
  },
  yAxis: {
    gridLineWidth: 0,
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
      type: "line",
      color: "#A1DAF7"
    },
    {
      data: serieWithTimestamp,
      type: "line",
      color: "#026AB5"
    }
  ]
};

export const LineChart = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

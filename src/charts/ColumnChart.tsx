import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Data = require("highcharts/modules/data");
import * as Luxon from "luxon";
import * as React from "react";
import { json } from "../data/model_prediction_template";

Data(Highcharts);

const serieWithTimestamp = json.map(serie => {
  const luxonDate = Luxon.DateTime.fromFormat(serie.Date, "M/d/yyyy");
  return [luxonDate.toMillis(), serie.FO_CL_EC_BD] as [number, number];
});

const options: any = {
  title: {
    text: "Historical Demand E-Commerce",
    align: "left"
  },
  chart: {
    type: "column",
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
    title: null
  },
  plotOptions: {
    column: {
      color: "#026AB5",
      borderRadius: 3,
      states: {
        hover: { color: "#029FE3" }
      }
    }
  },
  series: [
    {
      data: serieWithTimestamp,
      type: "column"
    }
  ]
};

export const ColumnChart = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

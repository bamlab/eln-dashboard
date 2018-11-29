import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Data = require("highcharts/modules/data");
import * as Luxon from "luxon";
import * as React from "react";
import { json } from "../data/ChinaDC-TradeFlow";

Data(Highcharts);

const totalInvCoverage = json.map(serie => {
  const luxonDate = Luxon.DateTime.fromFormat(serie.Date, "M/d/yyyy");
  return [luxonDate.toMillis(), serie.total_inv_coverage] as [number, number];
});

const totalOfftake = json.map(serie => {
  const luxonDate = Luxon.DateTime.fromFormat(serie.Date, "M/d/yyyy");
  return [luxonDate.toMillis(), serie.total_offtake] as [number, number];
});
const totalSGOPSellin = json.map(serie => {
  const luxonDate = Luxon.DateTime.fromFormat(serie.Date, "M/d/yyyy");
  return [luxonDate.toMillis(), serie.total_SGOP_sellin] as [number, number];
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
      format: "{value}"
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
      data: totalInvCoverage,
      type: "column",
      color: "#A1DAF7",
      name: "Total INV Coverage"
    },
    {
      data: totalSGOPSellin,
      type: "line",
      color: "#026AB5",
      name: "Total SGOP Sellin"
    },
    {
      data: totalOfftake,
      type: "line",
      color: "#65A124",
      name: "Total Offtake"
    }
  ]
};

export const LineColumnChart = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

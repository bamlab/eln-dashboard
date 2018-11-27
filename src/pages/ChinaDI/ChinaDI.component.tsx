import * as React from "react";
import { ColumnChart } from "../../charts/ColumnChart";
import { LineChart } from "../../charts/LineChart";
import { LineColumnChart } from "../../charts/LineColumnChart";

export const ChinaDI = () => (
  <div>
    <ColumnChart />
    <LineChart />
    <LineColumnChart />
  </div>
);

import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Data = require("highcharts/modules/data");
import * as React from "react";

Data(Highcharts);
const csv = `Date,IF_CL_EC_KA,IF_IL_EC_KA,FO_CL_EC_KA,FO_IL_EC_KA,GU_CL_EC_KA,GU_IL_EC_KA,IF_CL_EC_BD,IF_IL_EC_BD,FO_CL_EC_BD,FO_IL_EC_BD,GU_CL_EC_BD,GU_IL_EC_BD,...
1/1/2018,5977.187517,1317.054823,7625.418652,1808.694041,19676.4812,4794.138772,5977.187517,1317.054823,7625.418652,1808.694041,19676.4812,4794.138772,
2/1/2018,5198.536126,1124.655579,6237.413553,1631.65352,14101.99027,4485.713648,5198.536126,1124.655579,6237.413553,1631.65352,14101.99027,4485.713648,
3/1/2018,5489.232839,1144.47745,7115.958614,1771.825898,17295.19928,4861.093159,5489.232839,1144.47745,7115.958614,1771.825898,17295.19928,4861.093159,
4/1/2018,5730.212301,1178.182724,6792.115852,1773.40613,16091.96378,5098.978281,5730.212301,1178.182724,6792.115852,1773.40613,16091.96378,5098.978281,
5/1/2018,5708.524144,1160.440518,6905.99859,1555.838521,17623.37815,4711.844549,5708.524144,1160.440518,6905.99859,1555.838521,17623.37815,4711.844549,
6/1/2018,5579.453019,1141.12484,7138.321355,1580.612054,18611.99275,4875.312162,5579.453019,1141.12484,7138.321355,1580.612054,18611.99275,4875.312162,
7/1/2018,5594.798385,1118.344935,6778.639929,1636.827843,16771.90692,5176.859769,5594.798385,1118.344935,6778.639929,1636.827843,16771.90692,5176.859769,
8/1/2018,5553.574386,1058.995105,6738.662737,1652.152608,17514.10015,4981.122731,5553.574386,1058.995105,6738.662737,1652.152608,17514.10015,4981.122731,
`;

const options = {
  title: {
    text: "Historical Demand E-Commerce"
  },
  data: { csv },
  chart: {
    type: "column"
  },
  Xaxis: {
    type: "datetime"
  },
  plotOptions: {
    series: {
      stacking: "normal"
    }
  }
};

export const VerySimpleChart = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const HCMAP = require("highcharts/modules/map");
import * as React from "react";
import { CustomSlider } from "src/components/CustomSlider";
import { WithGoogleData } from "src/highOrderComponents/withGoogleData";

HCMAP(Highcharts);

const waterfallDataMapper = (
  accumulator: any,
  serie: string[],
  index: number
) => {
  accumulator.xNames =
    index === 0 ? accumulator.xNames : [...accumulator.xNames, serie[0]];
  accumulator.yNames = index === 0 ? serie.slice(1) : accumulator.yNames;
  const dataArray = serie
    .slice(1)
    .map((el, secondIndex) => [
      secondIndex,
      index - 1,
      Math.round(Number(el.replace(",", ".")))
    ]);
  accumulator.data = index === 0 ? [] : [...accumulator.data, ...dataArray];
  return accumulator;
};

const getChartOptions = (waterfallData: any) => ({
  chart: {
    type: "heatmap",
    marginTop: 40,
    marginBottom: 80,
    plotBorderWidth: 1
  },

  title: {
    text: null
  },

  xAxis: {
    categories: waterfallData.yNames
  },

  yAxis: {
    categories: waterfallData.xNames,
    title: null
  },

  colorAxis: {
    minColor: "#A1DAF7",
    maxColor: "#026AB5"
  },
  legend: false,

  series: [
    {
      name: "Sales per employee",
      borderWidth: 1,
      data: waterfallData.data,
      dataLabels: {
        enabled: true,
        color: "#000000",
        style: {
          fontWeight: "bold",
          color: "white",
          fontSize: 16
        }
      }
    }
  ]
});

interface IProps {
  data: any[];
  customOptions?: any;
}

interface IState {
  data: { [key: string]: string[][] };
  selectedData: any[];
}

const list = {
  "9/1/2018": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5381,31377847564", "6594,1901780065", "17977,252953833"],
    ["IL", "1222,93397087775", "2047,57780247081", "5736,08070123604"]
  ],
  "10/1/2018": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5507,37571588086", "6650,25999423679", "17634,1427775208"],
    ["IL", "1133,90618757404", "1886,59107497395", "5501,78139297998"]
  ],
  "11/1/2018": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5520,33787817677", "7631,77772759665", "23340,4288247131"],
    ["IL", "1203,47569396047", "2165,43065657757", "6848,71483485708"]
  ],
  "12/1/2018": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5316,29053199631", "6358,0965276786", "17061,5247032819"],
    ["IL", "1130,99983777724", "1909,69127282494", "5691,79604769455"]
  ],
  "1/1/2019": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5885,58660370427", "7126,7457480457", "20596,1496675409"],
    ["IL", "1263,60636934336", "1814,84126405896", "5342,63923531498"]
  ],
  "2/1/2019": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5326,34094244121", "5822,40763901122", "14931,6155269252"],
    ["IL", "1016,94623229095", "1301,66996464515", "4093,51901798074"]
  ],
  "3/1/2019": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5820,72664350402", "6513,06531434383", "18568,6990962219"],
    ["IL", "1065,78517343941", "1519,00267055253", "5007,32081248949"]
  ],
  "4/1/2019": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5527,57430167525", "6469,88240444801", "16881,8647260983"],
    ["IL", "1209,98298514153", "1679,10993127778", "5692,28384893632"]
  ],
  "5/1/2019": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5563,51513193701", "6629,03474275812", "17824,4064874678"],
    ["IL", "1222,15479050731", "1723,78399922709", "5613,36510878139"]
  ],
  "6/1/2019": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5303,59512185984", "6777,83959447068", "19351,976469942"],
    ["IL", "1212,60593646081", "1738,05901150591", "5633,72043970295"]
  ],
  "7/1/2019": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5338,2610063816", "6688,97251294013", "16957,6228963307"],
    ["IL", "1210,14570276611", "1804,88289052413", "5926,04011777625"]
  ],
  "8/1/2019": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5258,68782456808", "6667,10617224608", "17526,9056388171"],
    ["IL", "1214,93991576435", "1804,4039113976", "6090,4612181478"]
  ],
  "9/1/2019": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5152,22465497592", "6617,97824658078", "17401,6608748876"],
    ["IL", "1239,52482764148", "1832,35348556765", "6082,86732951993"]
  ],
  "10/1/2019": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5363,64328773184", "6751,44021858489", "17826,4678906348"],
    ["IL", "1282,75617178429", "1930,29491431701", "6202,66054530983"]
  ],
  "11/1/2019": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5387,57470630477", "7326,46442171257", "22480,9561880078"],
    ["IL", "1315,34086916663", "1920,57742562465", "6056,48627786888"]
  ],
  "12/1/2019": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5264,47243972895", "6620,84612203114", "17301,2725738505"],
    ["IL", "1308,04565796887", "1950,53722387045", "5914,73872896839"]
  ],
  "1/1/2020": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5858,20800750089", "7029,21130347508", "20559,9346858566"],
    ["IL", "1293,48452050256", "1765,74030027246", "5642,32367722776"]
  ],
  "2/1/2020": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5365,31176674655", "6204,39821269676", "15802,1555272821"],
    ["IL", "1086,73857199153", "1440,23915621443", "5403,70965313323"]
  ],
  "3/1/2020": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5656,64978859093", "6652,40194663129", "18810,5974090165"],
    ["IL", "1171,9266250481", "1570,55692444375", "5923,28314474808"]
  ],
  "4/1/2020": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5360,00301599996", "6519,89298840082", "18425,1210955831"],
    ["IL", "1218,76537412695", "1711,66790535875", "6229,56893887423"]
  ],
  "5/1/2020": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5394,47600630455", "6642,30969573914", "19192,9480959112"],
    ["IL", "1235,11891354625", "1753,58815217723", "6145,62086925212"]
  ],
  "6/1/2020": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5196,42989758932", "6746,07042049543", "20486,2595549305"],
    ["IL", "1231,36060992818", "1767,17470897192", "6164,71886743899"]
  ],
  "7/1/2020": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5192,20190554725", "6699,11153262046", "18393,8061272361"],
    ["IL", "1238,7695752385", "1824,70444123718", "6440,06455776348"]
  ],
  "8/1/2020": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5096,35154458381", "6681,15259794197", "18873,5656634594"],
    ["IL", "1232,99191022488", "1823,45094972456", "6603,07115886985"]
  ],
  "9/1/2020": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5014,86210539712", "6658,42783419685", "18724,1706489132"],
    ["IL", "1247,79869041903", "1849,59332868519", "6592,17677261053"]
  ],
  "10/1/2020": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5104,87120116752", "6705,95589385614", "18250,9889515821"],
    ["IL", "1255,1259716699", "1875,19217170661", "6579,85004275049"]
  ],
  "11/1/2020": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5111,67326627751", "7084,43320860085", "22182,6098702375"],
    ["IL", "1263,29044044661", "1864,2682357695", "6431,47242934392"]
  ],
  "12/1/2020": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5036,95075171038", "6632,54013724911", "17632,4953742258"],
    ["IL", "1269,46673541755", "1894,55594061719", "6290,32373935873"]
  ],
  "1/1/2021": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5608,23722916638", "6829,52296788174", "20609,4209853737"],
    ["IL", "1245,76130092316", "1702,4513804319", "6004,56268209414"]
  ],
  "2/1/2021": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5074,66703024845", "6131,53223523532", "15636,7229709646"],
    ["IL", "1037,57665346675", "1351,84194729882", "5720,09315318762"]
  ],
  "3/1/2021": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5279,47688679978", "6483,84668074749", "18661,9447405854"],
    ["IL", "1109,28630249439", "1494,43279739663", "6262,08108980893"]
  ],
  "4/1/2021": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5079,44951927621", "6436,83224918188", "18410,4421060003"],
    ["IL", "1161,97556744695", "1626,27300254197", "6551,43557883316"]
  ],
  "5/1/2021": [
    ["", "IF", "FO", "GUM"],
    ["CL", "5116,86224476067", "6538,74309442952", "19088,6942694156"],
    ["IL", "1181,84553552547", "1670,57228537713", "6471,83236509448"]
  ],
  "6/1/2021": [
    ["", "IF", "FO", "GUM"],
    ["CL", "4962,89818060475", "6613,19377770749", "20193,8973729805"],
    ["IL", "1180,90017552343", "1684,75360135001", "6492,01657757003"]
  ],
  "7/1/2021": [
    ["", "IF", "FO", "GUM"],
    ["CL", "4946,10053671807", "6608,67644035555", "18574,3681069566"],
    ["IL", "1198,46589564856", "1750,31258054859", "6782,02615718968"]
  ],
  "8/1/2021": [
    ["", "IF", "FO", "GUM"],
    ["CL", "4839,76749370057", "6594,05271877897", "18993,8190831821"],
    ["IL", "1188,88281428131", "1749,72819308243", "6946,25474931782"]
  ],
  "9/1/2021": [
    ["", "IF", "FO", "GUM"],
    ["CL", "4778,44753987839", "6591,29146540317", "18864,3384269081"],
    ["IL", "1200,89009581305", "1777,43181450876", "6938,21167487767"]
  ],
  "10/1/2021": [
    ["", "IF", "FO", "GUM"],
    ["CL", "4900,46544846824", "6700,5310276368", "19248,1176716351"],
    ["IL", "1241,29161893704", "1865,52767850952", "7040,02384303999"]
  ],
  "11/1/2021": [
    ["", "IF", "FO", "GUM"],
    ["CL", "4897,002376532", "6950,49348437437", "22578,497759214"],
    ["IL", "1240,28523149325", "1855,64599670263", "6893,54970816755"]
  ],
  "12/1/2021": [
    ["", "IF", "FO", "GUM"],
    ["CL", "4855,49956967487", "6665,64126665234", "18568,3881463687"],
    ["IL", "1251,74285350155", "1885,65042185316", "6751,88366180346"]
  ]
};

export const HeatMap = WithGoogleData(
  class extends React.PureComponent<IProps, IState> {
    constructor(props: any) {
      super(props);
      this.state = { data: list, selectedData: list[Object.keys(list)[0]] };
    }

    public refreshData = (num: number) => {
      const newData = list[Object.keys(list)[num]];
      this.setState({ selectedData: newData });
    };

    public render() {
      const waterfallData = this.state.selectedData.reduce(
        waterfallDataMapper,
        {
          xNames: [],
          yNames: [],
          data: []
        }
      );
      return (
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={getChartOptions(waterfallData)}
          />
          <CustomSlider list={Object.keys(list)} onChange={this.refreshData} />
        </div>
      );
    }
  }
);

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { ChinaMap } from "src/charts/ChinaMaps";
import { HardCodedChart } from "src/charts/HardCodedChart";
import { HeatMap } from "src/charts/HeatMap";
import { ColumnLineChart } from "src/charts/TradedFlowChart";
import { CardHeader } from "src/components/CardHeader";
import { CustomSlider } from "src/components/CustomSlider";
import { SelectorOutlined } from "src/components/SelectorOutlined.component";
import { SelectorOutlinedMultiple } from "src/components/SelectorOutlinedMultiple.component";
import { YearDropdown } from "src/components/YearDropdown";
import { colors } from "src/theme";

const styles = {
  root: {
    padding: 24
  },
  font: {
    fontWeight: 700,
    fontSize: 16
  },
  subTitle: {
    fontWeight: 700,
    fontSize: 14,
    marginTop: 16,
    marginBottom: 8
  }
};

const list = [
  "2015-01",
  "2015-02",
  "2015-03",
  "2015-04",
  "2015-05",
  "2015-06",
  "2015-07",
  "2015-08",
  "2015-09",
  "2015-10",
  "2015-11",
  "2015-12",
  "2016-01",
  "2016-02",
  "2016-03",
  "2016-04",
  "2016-05",
  "2016-06",
  "2016-07",
  "2016-08",
  "2016-09",
  "2016-10",
  "2016-11",
  "2016-12",
  "2017-01",
  "2017-02",
  "2017-03",
  "2017-04",
  "2017-05",
  "2017-06",
  "2017-07",
  "2017-08",
  "2017-09",
  "2017-10",
  "2017-11",
  "2017-12",
  "2018-01",
  "2018-02",
  "2018-03",
  "2018-04",
  "2018-05",
  "2018-06",
  "2018-07",
  "2018-08",
  "2018-09",
  "2018-10",
  "2018-11",
  "2018-12"
];

interface IData {
  name: string;
  data: number[];
  stack: string;
  color: string;
  tag: string;
}

const chartData = ((): IData[] => {
  const cumulatedData = {
    "2015": [100, 80, 60, 70, 90, 60, 80, 100, 90, 50, 100, 70],
    "2016": [100, 80, 60, 70, 90, 60, 80, 100, 90, 50, 100, 70],
    "2017": [100, 80, 60, 70, 90, 60, 80, 100, 90, 50, 100, 70],
    "2018": [100, 80, 60, 70, 90, 60, 80, 100, 90, 50, 100, 70],
    "2019": [100, 80, 60, 70, 90, 60, 80, 100, 90, 50, 100, 70]
  };
  const hashTable = {
    All: [""],
    "By Stage": ["IF", "FO", "GUM"],
    "By Label": ["CL", "IL"],
    "By Channel": ["MT", "MBS", "EC", "N.E.C"],
    "By Price Tier": ["UPRE+", "UPRE", "SPRE", "Main-stream"],
    "By City Tier": ["Key/A cities", "BCD cities"]
  };
  const colorArray = [
    colors.mainColor,
    colors.secondaryColor,
    colors.accentColor,
    colors.tertiaryColor
  ];
  const obj: IData[] = [];
  Object.keys(cumulatedData).map(year => {
    return Object.keys(hashTable).map((group: string) => {
      return hashTable[group].map((subGroup: string, index: number) => {
        obj.push({
          name: subGroup,
          data: cumulatedData[year],
          stack: year,
          color: colorArray[index],
          tag: group
        });
      });
    });
  });
  return obj;
})();

interface IProps {
  classes: {
    [key: string]: string;
  };
}
interface IState {
  dataContainer: IData[];
  currentYear: string[];
  currentSubmenu: string;
}

class SummaryActual extends React.Component<IProps, IState> {
  public state = {
    dataContainer: [...chartData].filter(el => el.tag === "All"),
    currentYear: ["2015", "2016", "2017", "2018", "2019"],
    currentSubmenu: "All"
  };

  public handleChange = (event: any) => {
    const yearValues =
      typeof event === "string" ? this.state.currentYear : event.target.value;
    const subMenuValue =
      typeof event === "string" ? event : this.state.currentSubmenu;

    this.setState({
      currentYear: yearValues,
      currentSubmenu: subMenuValue,
      dataContainer: chartData.filter(
        el => yearValues.includes(el.stack) && el.tag === subMenuValue
      )
    });
  };
  public render() {
    const { classes } = this.props;
    const fn = () => null;

    return (
      <div className={classes.root}>
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={12}>
            <Card>
              <CardContent>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography gutterBottom={true} className={classes.font}>
                    What is category demand?
                  </Typography>
                  <div>
                    <SelectorOutlinedMultiple
                      defaultValues={["2015", "2016", "2017", "2018", "2019"]}
                      valueList={["2015", "2016", "2017", "2018", "2019"]}
                      onChange={this.handleChange}
                    />
                    <SelectorOutlined
                      defaultDisplayedValue={this.state.currentSubmenu}
                      valueList={[
                        "All",
                        "By Stage",
                        "By Label",
                        "By Channel",
                        "By Price Tier",
                        "By City Tier"
                      ]}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <Grid container={true} spacing={24}>
                  <Grid item={true} xs={12}>
                    <Typography color="primary" className={classes.subTitle}>
                      Absolute ('000 ton)
                    </Typography>
                    <HardCodedChart chartData={this.state.dataContainer} />
                  </Grid>
                  <Grid item={true} xs={12}>
                    <Typography color="primary" className={classes.subTitle}>
                      YoY growth rate
                    </Typography>
                    <ColumnLineChart
                      range="IMF Total Historical Category Demand (rate)"
                      customOptions={{
                        xAxis: {
                          plotLines: [
                            {
                              width: 1,
                              color: "grey",
                              value: 7.5,
                              zIndex: 10
                            }
                          ]
                        },
                        yAxis: {
                          gridLineWidth: 0,
                          title: null,
                          labels: {
                            formatter() {
                              const self: any = this as any;
                              return `${Math.floor(self.value)}%`;
                            }
                          },
                          plotLines: [
                            {
                              value: 0,
                              color: colors.secondaryFontColor,
                              dashStyle: "solid",
                              width: 1
                            }
                          ]
                        },
                        legend: {
                          enabled: false
                        }
                      }}
                    />
                  </Grid>
                  <Grid item={true} xs={12}>
                    <Typography color="primary" className={classes.subTitle}>
                      What is the YoY change ?
                    </Typography>
                    <ColumnLineChart
                      isStacked={false}
                      range="Category Total IMF YoY Growth Rate!A:D"
                      customOptions={{
                        xAxis: {
                          plotLines: [
                            {
                              width: 1,
                              color: "grey",
                              value: 7.5,
                              zIndex: 10
                            }
                          ]
                        },
                        yAxis: {
                          gridLineWidth: 0,
                          title: null,
                          labels: {
                            formatter() {
                              const self: any = this as any;
                              return `${Math.floor(self.value)}`;
                            }
                          },
                          plotLines: [
                            {
                              value: 0,
                              color: colors.secondaryFontColor,
                              dashStyle: "solid",
                              width: 1
                            }
                          ]
                        },
                        tooltip: {
                          formatter() {
                            const self: any = this as any;
                            return `${Math.floor(self.y)}`;
                          }
                        },
                        chart: { height: 250 }
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item={true} xs={12}>
            <Card>
              <CardContent />
            </Card>
          </Grid>
          <Grid item={true} xs={12}>
            <Card>
              <CardContent>
                <CardHeader
                  title="How does cross-level category ('000 ton) evolve?"
                  className={classes.font}
                >
                  <SelectorOutlined
                    onChange={fn}
                    valueList={[
                      "X-axis: Stage",
                      "X-axis: Channel",
                      "X-axis: Label",
                      "X-axis: Price Tier",
                      "X-axis: City Tier"
                    ]}
                    defaultDisplayedValue={"X-axis: Stage"}
                    iconColor="blue"
                  />
                  <SelectorOutlined
                    onChange={fn}
                    valueList={[
                      "Y-axis: Stage",
                      "Y-axis: Channel",
                      "Y-axis: Label",
                      "Y-axis: Price Tier",
                      "Y-axis: City Tier"
                    ]}
                    defaultDisplayedValue={"Y-axis: Label"}
                    iconColor="blue"
                  />
                </CardHeader>
                <HeatMap range="DeepDive Cross Level Demand Trend" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item={true} xs={12}>
            <Card>
              <CardContent>
                <CardHeader
                  title="How does category change with baby pool evolution?"
                  className={classes.font}
                />
                <Typography color="primary" className={classes.subTitle}>
                  Baby pool (mn)
                </Typography>
                <ColumnLineChart
                  isStacked={false}
                  range="IMF total - summary actual & future baby pool mn!A:D"
                  customOptions={{
                    yAxis: {
                      gridLineWidth: 0,
                      title: null,
                      labels: {
                        formatter() {
                          const self: any = this as any;
                          return `${Math.floor(self.value)}`;
                        }
                      }
                    },
                    tooltip: {
                      formatter() {
                        const self: any = this as any;
                        return `${Math.floor(self.y)}`;
                      }
                    },
                    chart: { height: 250 }
                  }}
                />
                <Typography color="primary" className={classes.subTitle}>
                  IMF Demand ('000 ton)
                </Typography>
                <ColumnLineChart
                  isStacked={false}
                  range="IMF total - summary actual & future baby pool ton!A:D"
                  customOptions={{
                    yAxis: {
                      gridLineWidth: 0,
                      title: null,
                      labels: {
                        formatter() {
                          const self: any = this as any;
                          return `${Math.floor(self.value)}`;
                        }
                      }
                    },
                    tooltip: {
                      formatter() {
                        const self: any = this as any;
                        return `${Math.floor(self.y)}`;
                      }
                    },
                    chart: { height: 250 }
                  }}
                />
                <CustomSlider list={list} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item={true} xs={12}>
            <Card>
              <CardContent>
                <CardHeader
                  title="What is the geographical distributions of category and baby pool ?"
                  className={classes.font}
                >
                  <YearDropdown />
                </CardHeader>
                <ChinaMap />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export const SummaryActualTotal = withStyles(styles)(SummaryActual);

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { ColumnLineChart } from "src/charts/TradedFlowChart";
import { ColumnLineChartTradeFlow } from "src/charts/TradedFlowChartWith2Yaxis";
import { WaterfallChart } from "src/charts/WaterfallChart";
import { RadioButtons } from "src/components/RadioButtons";
import { SelectorOutlined } from "src/components/SelectorOutlined.component";
import { CurrentCycleDCTable } from "src/tables/CurrentCycleDCTable";
import { TradeFlowDC } from "src/tables/TradeFlowDC";

const quarterArray = [
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
  ["34%", "11.0"],
  ["25%", "11.5"],
  ["60%", "13.2"],
  ["65%", "13.3"],
  ["3%", "13.4"],
  ["7%", "14.3"],
  ["34%", "14.7"],
  ["14%", "14.8"],
  ["20%", "15.1"],
  ["8%", "15.3"],
  ["20%", "15.5"],
  ["8%", "15.6"],
  ["5%", "15.6"],
  ["10%", "16.0"],
  ["5%", "16.1"],
  ["6%", "16.3"]
];

const styles = {
  root: {
    padding: 24
  },
  font: {
    fontWeight: 700,
    fontSize: 16
  }
};
const SummaryCurrentForecastComponent = (props: any) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography gutterBottom={true} className={classes.font}>
                  Current Cycle Phasing - DC offtake Quarterly Phasing
                </Typography>
                <RadioButtons valueList={["By Quaterly", "By Year"]} />
              </div>
            </CardContent>
            <ColumnLineChart
              range="China DC Total Quarterly phasing"
              // @ts-ignore
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
                xAxis: {
                  plotLines: [
                    {
                      width: 1,
                      color: "grey",
                      value: 3.5,
                      zIndex: 10
                    },
                    {
                      width: 1,
                      color: "grey",
                      value: 7.5,
                      zIndex: 10
                    },
                    {
                      width: 1,
                      color: "grey",
                      value: 11.5,
                      zIndex: 10
                    },
                    {
                      width: 1,
                      color: "grey",
                      value: 15.5,
                      zIndex: 10
                    }
                  ],
                  labels: {
                    autoRotation: 0,
                    useHTML: true,
                    formatter() {
                      return (
                        // @ts-ignore
                        quarterArray[this.pos][0]
                          ? `<div style="display:flex;flex-direction:column;align-items:center;">
                    <div>${this.value}</div>
                    <div style="height: 19px;	width: 30px;	border-radius: 3px;	background-color: #99C3E1;text-align:center;line-height:19px;margin-top:8px;color: #002677;font-weight:bold;">${
                      // @ts-ignore
                      quarterArray[this.pos][0]
                    }</div>
                    <div style="height: 19px;	width: 30px;	border-radius: 3px;	background-color: #A1DAF7;text-align:center;line-height:19px;margin-top:4px;color: #002677;font-weight:bold;">${
                      // @ts-ignore
                      quarterArray[this.pos][1]
                    }</div>
                    </div>`
                          : `<div>${this.value}</div>`
                      );
                    }
                  }
                }
              }}
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Current cycle DC
              </Typography>
            </CardContent>
            <CurrentCycleDCTable range="China DC Current Cycle DC" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Typography gutterBottom={true} className={classes.font}>
                  Trade Flow - DC
                </Typography>
                <SelectorOutlined
                  valueList={["NC", "NP", "AC", "AP"]}
                  defaultDisplayedValue={"NC"}
                />
              </div>
              <ColumnLineChartTradeFlow range="China DC  Trade Flow DC" />
            </CardContent>
            <TradeFlowDC range="China DC  Trade Flow DC by Brand" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Cycle evolution - DC Total offtake bridge by brand (2018)
              </Typography>
              <WaterfallChart range="China DC Current Forecast Risk & ops!A:C" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const SummaryCurrentForecastChina = withStyles(styles)(
  SummaryCurrentForecastComponent
);

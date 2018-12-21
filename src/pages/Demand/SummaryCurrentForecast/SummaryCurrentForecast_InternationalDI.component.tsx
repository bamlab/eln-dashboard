import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { ColumnLineChart } from "src/charts/TradedFlowChart";
import { WaterfallChart } from "src/charts/WaterfallChart";
import { OrganizationSelector } from "src/components/OrganizationSelector";
import { RadioButtons } from "src/components/RadioButtons";
import { SelectorOutlined } from "src/components/SelectorOutlined.component";
import { CurrentCycleDCTable } from "src/tables/CurrentCycleDCTable";
import { CommonTable } from "src/tables/table/CommonTable";
import { scheme } from "src/tables/table/tableScheme";

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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Typography gutterBottom={true} className={classes.font}>
                  Current Cycle Phasing - DI offtake Quarterly Phasing
                </Typography>
                <RadioButtons valueList={["By Quarter", "By Year"]} />
                <SelectorOutlined
                  defaultDisplayedValue={"ANZ"}
                  valueList={["ANZ", "DE", "UK", "NL"]}
                />
              </div>
              <ColumnLineChart
                range="DI Total Quarterly phasing"
                // @ts-ignore
                customOptions={{
                  yAxis: {
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Current cycle DI
              </Typography>
            </CardContent>
            <CurrentCycleDCTable range="China DI Current Cycle DC" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                DI Offtake from channel perspective
              </Typography>
              (only displayed when « By Channel » is selected on the table
              above)
            </CardContent>
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
                  Trade Flow DI
                </Typography>
                <div>
                  <OrganizationSelector />
                </div>
              </div>
            </CardContent>

            <ColumnLineChart
              range="DI Total Trade Flow Chart!A:D"
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
                }
              }}
            />
            <CommonTable
              range="International DI - Trade flow table!A:N"
              styleRows={[scheme.rowBlue, scheme.rowDefault]}
              styleCells={[
                [scheme.cellWhiteBold],
                [scheme.cellBlueBold, scheme.cellBlackBold]
              ]}
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Cycle evolution - DI total offtake bridge by country (Sep - Oct
                cycle)
              </Typography>
              <WaterfallChart range="DI Total Risk & ops 2018!A:C" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const SummaryCurrentForecastInternationalDI = withStyles(styles)(
  SummaryCurrentForecastComponent
);

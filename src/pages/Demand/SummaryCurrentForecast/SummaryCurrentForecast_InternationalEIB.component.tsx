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
                  Current Cycle Phasing - EIB offtake Quarterly Phasing
                </Typography>
                <RadioButtons valueList={["By Quaterly", "By Year"]} />
                <SelectorOutlined
                  defaultDisplayedValue={"ANZ"}
                  valueList={["ANZ", "DE", "UK", "NL"]}
                />
              </div>
              <ColumnLineChart
                range="EIB Total Quarterly phasing"
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
                Trackable offtake
              </Typography>
            </CardContent>
            <CommonTable
              range="EIB Total Trackable Offtake display"
              styleRows={[
                scheme.rowDefault,
                scheme.rowBlue,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowBlue
              ]}
              styleCells={[
                [scheme.cellBlueBoldNoWrap],
                [scheme.cellWhiteBold, scheme.cellWhiteBoldAlignRightNoWrap],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellWhiteBoldNoWrap, scheme.cellWhiteGreyBold]
              ]}
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Non-trackable offtake
              </Typography>
            </CardContent>
            <CommonTable
              range="EIB Total - Total Non-trackable Offtake display"
              styleRows={[
                scheme.rowDefault,
                scheme.rowBlue,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowBlue
              ]}
              styleCells={[
                [scheme.cellBlueBoldNoWrap],
                [scheme.cellWhiteBold, scheme.cellWhiteBoldAlignRightNoWrap],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellWhiteBoldNoWrap, scheme.cellWhiteGreyBold]
              ]}
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Total offtake
              </Typography>
            </CardContent>
            <CommonTable
              range="EIB Total - Total Offtake display"
              styleRows={[
                scheme.rowDefault,
                scheme.rowBlue,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowBlue
              ]}
              styleCells={[
                [scheme.cellBlueBoldNoWrap],
                [scheme.cellWhiteBold, scheme.cellWhiteBoldAlignRightNoWrap],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellDefaultNoWrap, scheme.cellRedBlack],
                [scheme.cellWhiteBoldNoWrap, scheme.cellWhiteGreyBold]
              ]}
            />
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
                  Trade Flow
                </Typography>
                <div>
                  <OrganizationSelector />
                </div>
              </div>
            </CardContent>
            <ColumnLineChart range="EIB Total Trade Flow Chart!A:D" />
            <CommonTable
              range="International EIB - Trade flow table!A:N"
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
                Cycle evolution - 2018 EIB total offtake bridge by country (Oct
                - Nov cycle)
              </Typography>
              <WaterfallChart range="IEB Total Risk & ops 2018!A:C" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Cycle evolution - 2019 EIB total offtake bridge by country (Oct
                - Nov cycle)
              </Typography>
              <WaterfallChart range="IEB Total Risk & ops 2019!A:C" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Cycle evolution - 2018 to 2019 EIB total offtake breakdown by
                country
              </Typography>
              <WaterfallChart range="IEB Summary Total Bridge!A:C" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const SummaryCurrentForecastInternationalEIB = withStyles(styles)(
  SummaryCurrentForecastComponent
);

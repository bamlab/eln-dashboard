import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { ColumnLineChart } from "src/charts/TradedFlowChart";
import { WaterfallChart } from "src/charts/WaterfallChart";
import { SelectorOutlined } from "src/components/SelectorOutlined.component";
import { CommonTable } from "src/tables/table/CommonTable";
import { scheme } from "src/tables/table/tableScheme";

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
                <SelectorOutlined
                  defaultDisplayedValue={"ANZ"}
                  valueList={["ANZ", "DE", "UK", "NL"]}
                />
              </div>
              <ColumnLineChart
                range="EIB Total Quarterly phasing!A:E"
                customOptions={{
                  yAxis: {
                    labels: {
                      formatter() {
                        const self: any = this as any;
                        return `${Math.floor(self.value)}`;
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
                  <SelectorOutlined
                    defaultDisplayedValue={"All countries"}
                    valueList={["All countries", "ANZ", "DE", "UK", "NL"]}
                  />
                  <SelectorOutlined
                    defaultDisplayedValue={"All brands"}
                    valueList={["All brands"]}
                  />
                  <SelectorOutlined
                    defaultDisplayedValue={"All sub-brands"}
                    valueList={["All sub-brands"]}
                  />
                  <SelectorOutlined
                    defaultDisplayedValue={"Stage"}
                    valueList={["Stage"]}
                  />
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
                Cycle Evolution - 2018 EIB Offtake (Nov cycle - Dec cycle)
              </Typography>
              <WaterfallChart range="IEB Total Risk & ops 2018!A:C" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Cycle Evolution - 2019 EIB Offtake (Nov cycle - Dec cycle)
              </Typography>
              <WaterfallChart range="IEB Total Risk & ops 2019!A:C" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Bridge between cycles
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

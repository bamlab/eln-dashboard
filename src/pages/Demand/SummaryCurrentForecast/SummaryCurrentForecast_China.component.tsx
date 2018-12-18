import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { ColumnLineChart } from "src/charts/TradedFlowChart";
import { ColumnLineChartTradeFlow } from "src/charts/TradedFlowChartWith2Yaxis";
import { WaterfallChart } from "src/charts/WaterfallChart";
import { OrganizationSelector } from "src/components/OrganizationSelector";
import { SelectorOutlined } from "src/components/SelectorOutlined.component";
import { CurrentCycleDCTable } from "src/tables/CurrentCycleDCTable";
import { TradeFlowDC } from "src/tables/TradeFlowDC";

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
              <Typography gutterBottom={true} className={classes.font}>
                Current Cycle Phasing - DC offtake Quarterly Phasing
              </Typography>
            </CardContent>
            <ColumnLineChart
              range="China DC Total Quarterly phasing"
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
              <Typography gutterBottom={true} className={classes.font}>
                Trade Flow DC by Brand
              </Typography>
            </CardContent>
            <TradeFlowDC range="China DC  Trade Flow DC by Brand" />
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
                  Trade Flow by SKU
                </Typography>
                <OrganizationSelector
                  displayStage={false}
                  displayCountry={false}
                  defaultGroup={"DC"}
                />
              </div>
            </CardContent>
            <TradeFlowDC range="China DC  Trade Flow DC by SKU" />
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

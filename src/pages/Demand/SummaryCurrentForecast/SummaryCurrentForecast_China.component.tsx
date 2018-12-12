import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { ColumnLineChart } from "src/charts/TradedFlowChart";
import { WaterfallChart } from "src/charts/WaterfallChart";
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
            <ColumnLineChart range="EIB Total Quarterly phasing!A:E" />
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
              <Typography gutterBottom={true} className={classes.font}>
                Trade Flow - DC
              </Typography>
              <ColumnLineChart range="China DC  Trade Flow DC" />
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
              <Typography gutterBottom={true} className={classes.font}>
                Trade Flow by SKU
              </Typography>
            </CardContent>
            <TradeFlowDC range="China DC  Trade Flow DC by SKU" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Risks & opportunities
              </Typography>
              <WaterfallChart range="China DI Current Forecast Risk & ops!A:C" />
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

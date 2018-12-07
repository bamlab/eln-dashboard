import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { LineColumnChart } from "src/charts/LineColumnChart";
import { ColumnLineChart } from "src/charts/TradedFlowChart";
import { WaterfallChart } from "src/charts/WaterfallChart";
import { CustomTable } from "src/tables/table/Table";

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
            <CustomTable />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Trade Flow DC
              </Typography>
            </CardContent>
            <LineColumnChart range="DI Historical forecast bias!A:C" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Trade Flow DC by Brand
              </Typography>
            </CardContent>
            <CustomTable />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Trade Flow by SKU
              </Typography>
            </CardContent>
            <CustomTable />
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

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { ColumnLineChart } from "src/charts/TradedFlowChart";
import { WaterfallChart } from "src/charts/WaterfallChart";
import { OfftakeTable } from "src/tables/OfftakeTable";
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
                Current Cycle Phasing - DI offtake Quarterly Phasing
              </Typography>
            </CardContent>
            <ColumnLineChart range="EIB Total Quarterly phasing!A:E" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Current cycle DI
              </Typography>
            </CardContent>
            <CustomTable />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                DI Offtake from channel perspective
              </Typography>
            </CardContent>
            <OfftakeTable range="EIB Total Trackable Offtake display!A:N" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Cycle evolution - DI total offtake bridge by brand (2018,2019)
              </Typography>
            </CardContent>
            <WaterfallChart range="China DI Current Forecast Risk & ops!A:C" />
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
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Trade flow DI
              </Typography>
            </CardContent>
            <ColumnLineChart range="EIB Total Trade Flow Chart!A:D" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Trade flow DI
              </Typography>
            </CardContent>
            <OfftakeTable range="EIB Total Trackable Offtake display!A:N" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Trade flow DI
              </Typography>
            </CardContent>
            <OfftakeTable range="EIB Total Trackable Offtake display!A:N" />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const SummaryCurrentForecastInternationalDI = withStyles(styles)(
  SummaryCurrentForecastComponent
);

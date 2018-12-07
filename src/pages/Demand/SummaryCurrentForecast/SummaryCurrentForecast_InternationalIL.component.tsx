import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { ColumnLineChart } from "src/charts/TradedFlowChart";
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
                Current Cycle Phasing - IL offtake Quarterly Phasing
              </Typography>
            </CardContent>
            <ColumnLineChart range="EIB Total Quarterly phasing!A:E" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Trackable offtake
              </Typography>
            </CardContent>
            <CustomTable />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Non-trackable offtake
              </Typography>
            </CardContent>
            <CustomTable />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Total offtake
              </Typography>
            </CardContent>
            <CustomTable />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Trade flow - IL (total)
              </Typography>
            </CardContent>
            <ColumnLineChart range="EIB Total Trade Flow Chart!A:D" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Trade Flow
              </Typography>
            </CardContent>
            <CustomTable />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const SummaryCurrentForecastInternationalIL = withStyles(styles)(
  SummaryCurrentForecastComponent
);

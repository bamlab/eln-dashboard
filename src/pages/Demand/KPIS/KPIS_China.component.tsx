import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { ColumnLineChart } from "src/charts/TradedFlowChart";
import { ForecastBiasTable } from "src/tables/ForecastBiais";
import { SmallForecastBiasTable } from "src/tables/SmallForecastBiais";
import { LineColumnChart } from "./../../../charts/LineColumnChart";

const styles = {
  root: {
    padding: 24
  },
  font: {
    fontWeight: 700,
    fontSize: 16
  }
};
const KPISComponent = (props: any) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                DC Offtake Forecast & Bias by brands
              </Typography>
            </CardContent>
            <ForecastBiasTable range="China DC Forecast accuracy and Bias" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical Forecast Accuracy
              </Typography>
            </CardContent>
            <ColumnLineChart range="China DC  Historical Forecast Accuracy" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical Forecast Bias
              </Typography>
            </CardContent>
            <ColumnLineChart
              isStacked={false}
              range="China DC  Historical Forecast Bias"
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                DC Sell-in Forecast Accuracy & Bias
              </Typography>
            </CardContent>
            <SmallForecastBiasTable range="China DC  Sellin accuracy Bias" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical Forecast Accuracy
              </Typography>
              <ColumnLineChart range="China DC Historical Forecast Accuracy" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical Forecast Bias
              </Typography>
            </CardContent>
            <LineColumnChart range={"DC Historical forecast bias!A:C"} />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const KPISChina = withStyles(styles)(KPISComponent);

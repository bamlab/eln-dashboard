import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { LineColumnChart } from "src/charts/LineColumnChart";
import { TradeFlowChart } from "src/charts/TradedFlowChart";
import { EIBOfftakeForecastAccuracyBiasTable } from "src/tables/EIBOfftakeForecastAccuracyBiasTable";

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
                EIB Offtake Forecast Accuracy & bias
              </Typography>
            </CardContent>
            <EIBOfftakeForecastAccuracyBiasTable range="EIB Offtake Forecast Accuracy!A:K" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                EIB Offtake Forecast Bias
              </Typography>
            </CardContent>
            <EIBOfftakeForecastAccuracyBiasTable range="EIB Offtake Forecast Accuracy!A:K" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical Forecast Accuracy - Offtake
              </Typography>
            </CardContent>
            <TradeFlowChart range="EIB Historical Forecast Accuracy!A:C" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical Forecast Bias - Offtake
              </Typography>
            </CardContent>
            <LineColumnChart range="DI Historical forecast bias!A:C" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical Forecast Accuracy - Sell in
              </Typography>
            </CardContent>
            <TradeFlowChart range="EIB Historical Forecast Accuracy!A:C" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical Forecast Bias - Sell in
              </Typography>
            </CardContent>
            <LineColumnChart range="DI Historical forecast bias!A:C" />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const KPISInternationalEIB = withStyles(styles)(KPISComponent);

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { ColumnLineChart } from "src/charts/TradedFlowChart";
import { EIBPreviousOfftake } from "src/tables/EIBPreviousOfftake";

const styles = {
  root: {
    padding: 24
  },
  font: {
    fontWeight: 700,
    fontSize: 16
  }
};
const PreviousForeCastsComponent = (props: any) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Previous Offtake
              </Typography>
            </CardContent>
            <ColumnLineChart
              range="EIB Previous Offtake!A:G"
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
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Previous Offtake
              </Typography>
            </CardContent>
            <EIBPreviousOfftake range="EIB Previous Offtake!J:Y" />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const PreviousForecastsInternationalIL = withStyles(styles)(
  PreviousForeCastsComponent
);
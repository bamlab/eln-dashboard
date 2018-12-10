import { Grid, Typography, withStyles } from "@material-ui/core";
import * as React from "react";
import { ColumnLineChart } from "src/charts/TradedFlowChart";

const styles = {
  root: {
    padding: 24
  },
  font: {
    fontWeight: 700,
    fontSize: 16
  },
  subTitle: {
    fontWeight: 700,
    fontSize: 14,
    marginTop: 16
  }
};

export const CategoryHistoricalDemandContainer = withStyles(styles)(
  (props: any) => {
    const { classes } = props;
    return (
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Typography color="primary" className={classes.subTitle}>
            Absolute ('000 ton)
          </Typography>
          <ColumnLineChart
            range="Historical Category Demand!A:C"
            isStacked={false}
            customOptions={{
              legend: {
                enabled: false
              },
              tooltip: {
                formatter() {
                  const self: any = this as any;
                  return `${self.series.userOptions.name}: ${self.y}%`;
                }
              }
            }}
          />
        </Grid>
        <Grid item={true} xs={12}>
          <Typography color="primary" className={classes.subTitle}>
            YoY growth rate
          </Typography>
          <ColumnLineChart
            range="Historical Category Demand!E:F"
            customOptions={{
              yAxis: {
                gridLineWidth: 0,
                min: 0,
                max: 30,
                title: null,
                labels: {
                  formatter() {
                    const self: any = this as any;
                    return `${Math.floor(self.value)}%`;
                  }
                }
              },
              legend: {
                enabled: false
              }
            }}
          />
        </Grid>
      </Grid>
    );
  }
);

import { Grid, Typography, withStyles } from "@material-ui/core";
import * as React from "react";
import { ColumnLineChart } from "src/charts/TradedFlowChart";
import { colors } from "src/theme";

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
    marginTop: 16,
    marginBottom: 8
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
            range="IMF Total Historical Category Demand (ton)"
            isStacked={false}
            customOptions={{
              legend: {
                enabled: false
              },
              tooltip: {
                formatter() {
                  const self: any = this as any;
                  return `${self.series.userOptions.name}: ${self.y}`;
                }
              },
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
        </Grid>
        <Grid item={true} xs={12}>
          <Typography color="primary" className={classes.subTitle}>
            YoY growth rate
          </Typography>
          <ColumnLineChart
            range="IMF Total Historical Category Demand (rate)"
            customOptions={{
              yAxis: {
                gridLineWidth: 0,
                title: null,
                labels: {
                  formatter() {
                    const self: any = this as any;
                    return `${Math.floor(self.value)}%`;
                  }
                },
                plotLines: [
                  {
                    value: 0,
                    color: colors.secondaryFontColor,
                    dashStyle: "solid",
                    width: 1
                  }
                ]
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

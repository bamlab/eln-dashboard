import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { ChinaMap } from "src/charts/ChinaMaps";
import { HeatMap } from "src/charts/HeatMap";
import { ColumnLineChart } from "src/charts/TradedFlowChart";
import { CardHeader } from "src/components/CardHeader";
import { CategoryHistoricalDemandContainer } from "src/components/CategoryHistoricalDemandContainer";
import {
  XAxisHeatMapDropdown,
  YAxisHeatMapDropdown
} from "src/components/HeatMapDropdown";
import { YearDropdown } from "src/components/YearDropdown";

const styles = {
  root: {
    padding: 24
  },
  font: {
    fontWeight: 700,
    fontSize: 16
  }
};

const SummaryActual = (props: any) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                What is historical category demand?
              </Typography>
              <CategoryHistoricalDemandContainer />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                How does YoY growth rate change?
              </Typography>
              <ColumnLineChart
                isStacked={false}
                range="Category Total IMF YoY Growth Rate!A:D"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <CardHeader
                title="Deep dive cross-level demand trends"
                className={classes.font}
              >
                <XAxisHeatMapDropdown />
                <YAxisHeatMapDropdown />
              </CardHeader>
              <HeatMap range="DeepDive Cross Level Demand Trend" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <CardHeader
                title="How are the demand change with the baby pool evolution"
                className={classes.font}
              />
              <ColumnLineChart
                isStacked={false}
                range="IMF total - summary actual & future baby pool mn!A:D"
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
              <ColumnLineChart
                range="IMF total - summary actual & future baby pool ton!A:D"
                customOptions={{
                  legend: { enabled: false },
                  yAxis: {
                    gridLineWidth: 0,
                    title: null,
                    labels: {
                      formatter() {
                        return ``;
                      }
                    }
                  }
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <CardHeader
                title="Indicators by geography"
                className={classes.font}
              >
                <YearDropdown />
              </CardHeader>
              <ChinaMap />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const SummaryActualTotal = withStyles(styles)(SummaryActual);

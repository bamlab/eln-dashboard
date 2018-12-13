import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { ColumnLineChart } from "src/charts/TradedFlowChart";

const blueTitleStyle: React.CSSProperties = {
  fontWeight: "bold",
  paddingLeft: 12
};

const styles = {
  root: {
    padding: 24
  },
  font: {
    fontWeight: 700,
    fontSize: 16
  }
};
const CreateNewForecastComponent = (props: any) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Typography color="primary" style={blueTitleStyle}>
          INPUT DATA
        </Typography>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Trend of newborn population
              </Typography>
              <ColumnLineChart
                range="Create New forecast newborn"
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
                  }
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Typography color="primary" style={blueTitleStyle}>
          FORECAST RESULT
        </Typography>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Forecast Result
              </Typography>
              <ColumnLineChart
                range="Create New forecast result!F:H"
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
                  }
                }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const CreateNewForecast = withStyles(styles)(CreateNewForecastComponent);

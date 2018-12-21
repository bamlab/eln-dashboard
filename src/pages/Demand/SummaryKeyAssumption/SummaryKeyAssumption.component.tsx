import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { ColumnLineChart } from "src/charts/TradedFlowChart";
import { keyAssumptionsStyles } from "src/pages/styles/keyAssumptions.style";

const SummaryKeyAssumptionComponent = (props: any) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.title}>
                Assumptions
              </Typography>
              <Typography
                gutterBottom={true}
                className={classes.content}
                color="primary"
              >
                <li className={classes.paragraph}>
                  Future demand volumes are relevant to all past three years'
                  volumes
                </li>
                <li className={classes.paragraph}>
                  Built-in machine learning algorithm weights recent past six
                  months's volumes heavier than more outdated demand
                </li>
                <li className={classes.content}>
                  IL, DI and EIB follows arithmic relationship of IL = DI + EIB
                </li>
                <li className={classes.paragraph}>
                  For EIB IL, KPIs are calculated at country and brand levels,
                  forecasts are conducted at SKU levels
                </li>
                <li className={classes.paragraph}>Others</li>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.title}>
                Key Input Data in the Model
              </Typography>
              <ColumnLineChart
                range="Key Input Data in the Model"
                customOptions={{
                  legend: {
                    enabled: false
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.title}>
                Distribution trend
              </Typography>
              <ColumnLineChart
                range="Category forecast ('000) tons"
                customOptions={{
                  legend: {
                    enabled: false
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.title}>
                OSA trend
              </Typography>
              <ColumnLineChart
                range="Historical Trend of offtake price"
                customOptions={{
                  legend: {
                    enabled: false
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <Typography gutterBottom={true} className={classes.title}>
              <CardContent>Pricing trend</CardContent>
            </Typography>
            <ColumnLineChart
              range="Historical Trend of marketing spent"
              customOptions={{
                legend: {
                  enabled: false
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
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const SummaryKeyAssumption = withStyles(keyAssumptionsStyles)(
  SummaryKeyAssumptionComponent
);

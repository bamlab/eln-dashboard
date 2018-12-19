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
import { CustomSlider } from "src/components/CustomSlider";
import { SelectorOutlined } from "src/components/SelectorOutlined.component";
import { SelectorOutlinedMultiple } from "src/components/SelectorOutlinedMultiple.component";
import { YearDropdown } from "src/components/YearDropdown";
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

const list = [
  "2015-01",
  "2015-02",
  "2015-03",
  "2015-04",
  "2015-05",
  "2015-06",
  "2015-07",
  "2015-08",
  "2015-09",
  "2015-10",
  "2015-11",
  "2015-12",
  "2016-01",
  "2016-02",
  "2016-03",
  "2016-04",
  "2016-05",
  "2016-06",
  "2016-07",
  "2016-08",
  "2016-09",
  "2016-10",
  "2016-11",
  "2016-12",
  "2017-01",
  "2017-02",
  "2017-03",
  "2017-04",
  "2017-05",
  "2017-06",
  "2017-07",
  "2017-08",
  "2017-09",
  "2017-10",
  "2017-11",
  "2017-12",
  "2018-01",
  "2018-02",
  "2018-03",
  "2018-04",
  "2018-05",
  "2018-06",
  "2018-07",
  "2018-08",
  "2018-09",
  "2018-10",
  "2018-11",
  "2018-12"
];

const SummaryActual = (props: any) => {
  const { classes } = props;
  const fn = () => null;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography gutterBottom={true} className={classes.font}>
                  What is category demand?
                </Typography>
                <SelectorOutlinedMultiple
                  defaultValues={["2017", "2018", "2019"]}
                  valueList={["2015", "2016", "2017", "2018", "2019"]}
                />
              </div>
              <CategoryHistoricalDemandContainer />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                What is the YoY change ?
              </Typography>
              <ColumnLineChart
                isStacked={false}
                range="Category Total IMF YoY Growth Rate!A:D"
                customOptions={{
                  yAxis: {
                    gridLineWidth: 0,
                    title: null,
                    labels: {
                      formatter() {
                        const self: any = this as any;
                        return `${Math.floor(self.value)}`;
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
                  tooltip: {
                    formatter() {
                      const self: any = this as any;
                      return `${Math.floor(self.y)}`;
                    }
                  },
                  chart: { height: 250 }
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <CardHeader
                title="How does cross-level category ('000 ton) evolve?"
                className={classes.font}
              >
                <SelectorOutlined
                  onChange={fn}
                  valueList={[
                    "X-axis: Stage",
                    "X-axis: Channel",
                    "X-axis: Label",
                    "X-axis: Price Tier",
                    "X-axis: City Tier"
                  ]}
                  defaultDisplayedValue={"X-axis: Stage"}
                  iconColor="blue"
                />
                <SelectorOutlined
                  onChange={fn}
                  valueList={[
                    "Y-axis: Stage",
                    "Y-axis: Channel",
                    "Y-axis: Label",
                    "Y-axis: Price Tier",
                    "Y-axis: City Tier"
                  ]}
                  defaultDisplayedValue={"Y-axis: Label"}
                  iconColor="blue"
                />
              </CardHeader>
              <HeatMap range="DeepDive Cross Level Demand Trend" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <CardHeader
                title="How does category change with baby pool evolution?"
                className={classes.font}
              />
              <Typography color="primary" className={classes.subTitle}>
                Baby pool (mn)
              </Typography>
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
                  },
                  chart: { height: 250 }
                }}
              />
              <Typography color="primary" className={classes.subTitle}>
                IMF Demand ('000 ton)
              </Typography>
              <ColumnLineChart
                isStacked={false}
                range="IMF total - summary actual & future baby pool ton!A:D"
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
                  },
                  chart: { height: 250 }
                }}
              />
              <CustomSlider list={list} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <CardHeader
                title="What is the geographical distributions of category and baby pool ?"
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

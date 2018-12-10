import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { HeatMap } from "src/charts/HeatMap";
import { CategoryHistoricalDemandContainer } from "src/components/CategoryHistoricalDemandContainer";
import { SelectorOutlined } from "src/components/SelectorOutlined.component";

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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <Typography gutterBottom={true} className={classes.font}>
                    What is the category demand?
                  </Typography>
                </div>
                <div>
                  <SelectorOutlined
                    defaultDisplayedValue="2015 - 2018"
                    valueList={["2015 - 2018"]}
                    onChange={console.log}
                  />
                  <SelectorOutlined
                    defaultDisplayedValue="All"
                    valueList={["All"]}
                    onChange={console.log}
                  />
                </div>
              </div>
              <CategoryHistoricalDemandContainer />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Previous Offtake
              </Typography>
            </CardContent>
            <HeatMap range="DeepDive Cross Level Demand Trend" />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const SummaryActualTailored = withStyles(styles)(SummaryActual);

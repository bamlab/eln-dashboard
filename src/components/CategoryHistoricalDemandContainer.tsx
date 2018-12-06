import { Grid, Typography, withStyles } from "@material-ui/core";
import * as React from "react";
import { ColumnChart } from "src/charts/ColumnChart";
import { LineChart } from "src/charts/LineChart";

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
    fontSize: 16,
    color: "white"
  }
};

export const CategoryHistoricalDemandContainer = withStyles(styles)(
  (props: any) => {
    const { classes } = props;
    return (
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={2}>
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                backgroundColor: "#026AB5",
                display: "inline-block",
                borderRadius: 2,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 8
              }}
            >
              <Typography gutterBottom={true} className={classes.subTitle}>
                Absolute
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item={true} xs={10}>
          <ColumnChart range="Historical Category Demand!A:B" />
        </Grid>
        <Grid item={true} xs={2}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                backgroundColor: "#026AB5",
                display: "inline-block",
                borderRadius: 2,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 8
              }}
            >
              <Typography gutterBottom={true} className={classes.subTitle}>
                YoY Growth rate
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item={true} xs={10}>
          <LineChart range="Historical Category Demand!D:E" />
        </Grid>
      </Grid>
    );
  }
);

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { LineChart } from "src/charts/LineChart";
import { ColumnChart } from "../../../charts/ColumnChart";

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
const SummaryActual = (props: any) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                What is historical category demand
              </Typography>
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
                      <Typography
                        gutterBottom={true}
                        className={classes.subTitle}
                      >
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
                      <Typography
                        gutterBottom={true}
                        className={classes.subTitle}
                      >
                        YoY Growth rate
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item={true} xs={10}>
                  <LineChart range="Historical Category Demand!D:E" />
                </Grid>
              </Grid>
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
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const SummaryActualTailored = withStyles(styles)(SummaryActual);

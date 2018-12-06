import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { CategoryHistoricalDemandContainer } from "src/components/CategoryHistoricalDemandContainer";

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
                Deep dive cross-level demand trends
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Indicators by geography
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const SummaryActualTotal = withStyles(styles)(SummaryActual);

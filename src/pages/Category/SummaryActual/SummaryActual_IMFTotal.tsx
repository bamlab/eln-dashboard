import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { ChinaMap } from "src/charts/ChinaMaps";
import { HeatMap } from "src/charts/HeatMap";
import { CardHeader } from "src/components/CardHeader";
import { CategoryHistoricalDemandContainer } from "src/components/CategoryHistoricalDemandContainer";
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
                Deep dive cross-level demand trends
              </Typography>
              <HeatMap range="DeepDive Cross Level Demand Trend" />
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

import { CardHeader } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FieldDropdown } from "src/components/FieldDropdown";
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
const SummaryForecastFuture = (props: any) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <CardHeader
                title="Forecast Future Summary"
                className={classes.font}
              >
                <YearDropdown />
                <FieldDropdown />
              </CardHeader>
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                YoY Change
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical Trend of newborn population (mn)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const SummaryForecastFutureIMFTotal = withStyles(styles)(
  SummaryForecastFuture
);

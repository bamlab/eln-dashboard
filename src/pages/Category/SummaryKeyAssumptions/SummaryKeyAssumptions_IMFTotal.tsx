import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

const styles = {
  root: {
    padding: 24
  },
  font: {
    fontWeight: 700,
    fontSize: 16
  }
};
const SummaryKeyAssumptions = (props: any) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.title}>
                Data assumptions
              </Typography>
              <Typography
                gutterBottom={true}
                className={classes.content}
                color="primary"
              >
                <li className={classes.paragraph}>
                  The following 6 channels covers the entire IMF market: EC,
                  Wechat, MBS, MT, F&F, OSW.
                </li>
                <li className={classes.paragraph}>
                  There is no double counting in the 6 hannels above.
                </li>
                <li className={classes.content}>
                  There is no international label IMF sold in MT (volume is
                  always 0).
                </li>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.title}>
                Modelling assumptions
              </Typography>
              <Typography
                gutterBottom={true}
                className={classes.content}
                color="primary"
              >
                <li className={classes.paragraph}>
                  The entire history of the market (jince Jan 2015) is relevant
                  for making future forecast.
                </li>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const SummaryKeyAssumptionsIMFTotal = withStyles(styles)(
  SummaryKeyAssumptions
);

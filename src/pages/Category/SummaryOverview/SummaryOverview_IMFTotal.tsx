import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { IMFTotalSummaryOverview } from "../../../tables/IMFTotalSummaryOverview";

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
    fontSize: 14
  }
};
const SummaryOverview = (props: any) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Overview
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 16
                }}
              >
                <div style={{ marginRight: 16 }}>
                  <Typography
                    gutterBottom={true}
                    className={classes.subTitle}
                    color="primary"
                  >
                    Past Actuals
                  </Typography>
                  <IMFTotalSummaryOverview range="IMF Total - SummaryOverview!A:G" />
                </div>
                <div>
                  <Typography
                    gutterBottom={true}
                    className={classes.subTitle}
                    color="primary"
                  >
                    Future Forecast
                  </Typography>
                  <IMFTotalSummaryOverview range="IMF Total - SummaryOverview!I:P" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const SummaryOverviewIMFTotal = withStyles(styles)(SummaryOverview);

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { RadioButtons } from "src/components/RadioButtons";
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Typography gutterBottom={true} className={classes.font}>
                  Overview
                </Typography>
                <RadioButtons
                  valueList={["Growth rate view", "Absolute value view"]}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 16
                }}
              >
                <div style={{ marginRight: 24, width: "50%" }}>
                  <Typography
                    gutterBottom={true}
                    className={classes.subTitle}
                    color="primary"
                  >
                    Past Actuals
                  </Typography>
                  <IMFTotalSummaryOverview range="IMF Total - SummaryOverview!A:G" />
                </div>
                <div style={{ width: "50%" }}>
                  <Typography
                    gutterBottom={true}
                    className={classes.subTitle}
                    color="primary"
                  >
                    Future Forecast
                  </Typography>
                  <IMFTotalSummaryOverview range="IMF Total - SummaryOverview!I:Q" />
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

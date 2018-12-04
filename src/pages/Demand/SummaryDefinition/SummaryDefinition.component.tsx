import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { colors } from "../../../theme";

const styles = {
  root: {
    padding: 24
  },
  font: {
    fontWeight: 700,
    fontSize: 16
  },
  cardContainer: {
    display: "flex"
  },
  title: {
    fontWeight: 700,
    fontSize: 16,
    color: "white"
  },
  blueSquare: {
    backgroundColor: colors.mainColor,
    width: 160,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    fontWeight: 700,
    fontSize: 14,
    marginTop: 8,
    marginBottom: 8
  },
  paragraph: {
    marginTop: 8,
    marginBottom: 8
  }
};
const SummaryDefinitionComponent = (props: any) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Card>
            <div className={classes.cardContainer}>
              <div className={classes.blueSquare}>
                <Typography className={classes.title}>Bias</Typography>
              </div>
              <CardContent>
                <Typography
                  gutterBottom={true}
                  className={classes.content}
                  color="primary"
                >
                  <li className={classes.paragraph}>
                    DC: Sum of all monthly SKUs' actuals / sum of all monthly
                    SKUs forecasts -1
                  </li>
                  <li className={classes.paragraph}>
                    IL: Sum of all monthly SKUs' actuals / sum of all monthly
                    SKUs forecasts -1
                  </li>
                  <li className={classes.content}>
                    IL: Sum of all monthly SKUs' actuals / sum of all monthly
                    SKUs forecasts -1
                  </li>
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <div className={classes.cardContainer}>
              <div className={classes.blueSquare}>
                <Typography className={classes.title}>
                  Forecast accuracy
                </Typography>
              </div>
              <CardContent>
                <Typography
                  gutterBottom={true}
                  className={classes.content}
                  color="primary"
                >
                  <li className={classes.paragraph}>
                    DC: 1 - (Sum of absolute value of forecast error per SKU per
                    month)/sum of all monthly SKUs' forecast
                  </li>
                  <li className={classes.paragraph}>
                    IL: 1 - (Sum of absolute value of forecast error per SKU per
                    month)/sum of all monthly SKUs' forecast
                  </li>
                  <li className={classes.paragraph}>
                    DI: 1 - (Sum of absolute value of forecast error per SKU per
                    month)/sum of all monthly SKUs' forecast
                  </li>
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const SummaryDefinition = withStyles(styles)(SummaryDefinitionComponent);

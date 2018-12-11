import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { SelectorOutlined } from "src/components/SelectorOutlined.component";
import { CategoryDriversDataTable } from "src/tables/CategoryDriversDataTable";
import { CommonTable } from "src/tables/table/CommonTable";
import { scheme } from "src/tables/table/tableScheme";

const styles = {
  root: {
    padding: 24
  },
  font: {
    fontWeight: 700,
    fontSize: 16
  }
};
const SummaryInputPastAndFuture = (props: any) => {
  const { classes } = props;
  const fn = () => null;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Category drivers data
              </Typography>
            </CardContent>
            <CategoryDriversDataTable range="IMF Total - Category driver data!A:I" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography gutterBottom={true} className={classes.font}>
                  Current Model Weighting
                </Typography>
                <SelectorOutlined
                  onChange={fn}
                  valueList={["Short term", "Long term"]}
                  defaultDisplayedValue="Short term"
                  iconColor="blue"
                />
              </div>
            </CardContent>

            <CommonTable
              range="IMF Total - Current Model Weighting!A:L"
              styleRows={[
                scheme.rowBlue,
                scheme.rowGrey,
                scheme.rowDefault,
                scheme.rowGrey,
                scheme.rowGrey
              ]}
              styleCells={[
                [scheme.whiteBold],
                [scheme.blackBold, scheme.default]
              ]}
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical trend of newborn population (mn)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical trend of pure breastfeeding rate (0-6 months) %
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical trend of IF demand (lagged 8 months) ('000 ton)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical trend of IF demand (lagged 6-9 months total) ('000
                ton)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const SummaryInputPastAndFutureIMFTotal = withStyles(styles)(
  SummaryInputPastAndFuture
);

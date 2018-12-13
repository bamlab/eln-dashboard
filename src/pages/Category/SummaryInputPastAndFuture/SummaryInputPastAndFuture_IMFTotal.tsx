import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { SelectorOutlined } from "src/components/SelectorOutlined.component";
import { CommonTable } from "src/tables/table/CommonTable";
import { scheme } from "src/tables/table/tableScheme";

const styles = {
  root: {
    padding: 24
  },
  font: {
    fontWeight: 700,
    fontSize: 16
  },
  title: {
    color: "blue"
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
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
            <CommonTable
              range="IMF Total - Category driver data!A:I"
              styleRows={[
                scheme.rowBlue,
                scheme.rowGrey,
                scheme.rowDefault,
                scheme.rowGrey,
                scheme.rowGrey,
                scheme.rowGrey
              ]}
              styleCells={[
                [scheme.cellWhiteBold],
                [scheme.cellBlackBold, scheme.cellDefault]
              ]}
            />
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
                [scheme.cellWhiteBold],
                [scheme.cellBlackBold, scheme.cellDefault]
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
            <CommonTable
              range="IMF Total - Historical Trend of pure breastfeeding"
              width={2500}
              styleRows={[scheme.rowBlue, scheme.rowGrey, scheme.rowDefault]}
              styleCells={[[scheme.cellWhiteBold], [scheme.cellDefault]]}
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical trend of pure breastfeeding rate (0-6 months) %
              </Typography>
            </CardContent>
            <CommonTable
              range="IMF Total - Historical trend new born pop"
              width={2500}
              styleRows={[scheme.rowBlue, scheme.rowGrey, scheme.rowDefault]}
              styleCells={[[scheme.cellWhiteBold], [scheme.cellDefault]]}
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical trend of IF demand (lagged 8 months) ('000 ton)
              </Typography>
            </CardContent>
            <CommonTable
              range="IMF Total - Historical trend of if demand(8months)!A:Z"
              width={2500}
              styleRows={[scheme.rowBlue, scheme.rowGrey, scheme.rowDefault]}
              styleCells={[[scheme.cellWhiteBold], [scheme.cellDefault]]}
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const SummaryInputPastAndFutureIMFTotal = withStyles(styles)(
  SummaryInputPastAndFuture
);

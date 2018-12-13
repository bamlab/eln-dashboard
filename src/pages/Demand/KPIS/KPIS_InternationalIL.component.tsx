import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { LineColumnChart } from "src/charts/LineColumnChart";
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
const KPISComponent = (props: any) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                IL Offtake Forecast Accuracy
              </Typography>
            </CardContent>
            <CommonTable
              range="EIB Offtake Forecast Accuracy"
              styleRows={[
                scheme.rowBlue,
                scheme.rowGrey,
                scheme.rowGrey,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowGrey,
                scheme.rowGrey,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowGrey,
                scheme.rowGrey
              ]}
              styleCells={[
                [
                  scheme.cellWhiteBold,
                  scheme.cellWhiteBold,
                  scheme.cellWhiteBoldAlignRight
                ],
                [
                  scheme.cellDefault,
                  scheme.cellDefault,
                  scheme.cellDefaultAlignRight
                ],
                [
                  scheme.cellDefault,
                  scheme.cellDefault,
                  scheme.cellDefaultAlignRight
                ],
                [
                  scheme.cellDefault,
                  scheme.cellDefault,
                  scheme.cellDefaultAlignRight
                ],
                [
                  scheme.cellDefault,
                  scheme.cellDefault,
                  scheme.cellDefaultAlignRight
                ],
                [
                  scheme.cellDefault,
                  scheme.cellDefault,
                  scheme.cellDefaultAlignRight
                ],
                [
                  scheme.cellDefault,
                  scheme.cellDefault,
                  scheme.cellDefaultAlignRight
                ],
                [
                  scheme.cellDefault,
                  scheme.cellDefault,
                  scheme.cellDefaultAlignRight
                ],
                [
                  scheme.cellDefault,
                  scheme.cellDefault,
                  scheme.cellDefaultAlignRight
                ],
                [
                  scheme.cellBlueBold,
                  scheme.cellBlueBold,
                  scheme.cellBlueRedBold
                ],
                [
                  scheme.cellBlueBold,
                  scheme.cellBlueBold,
                  scheme.cellBlueRedBold
                ]
              ]}
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                IL Offtake Forecast Bias
              </Typography>
            </CardContent>
            <CommonTable
              range="EIB Offtake Forecast Accuracy"
              styleRows={[
                scheme.rowBlue,
                scheme.rowGrey,
                scheme.rowGrey,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowGrey,
                scheme.rowGrey,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowGrey,
                scheme.rowGrey
              ]}
              styleCells={[
                [
                  scheme.cellWhiteBold,
                  scheme.cellWhiteBold,
                  scheme.cellWhiteBoldAlignRight
                ],
                [
                  scheme.cellDefault,
                  scheme.cellDefault,
                  scheme.cellDefaultAlignRight
                ],
                [
                  scheme.cellDefault,
                  scheme.cellDefault,
                  scheme.cellDefaultAlignRight
                ],
                [
                  scheme.cellDefault,
                  scheme.cellDefault,
                  scheme.cellDefaultAlignRight
                ],
                [
                  scheme.cellDefault,
                  scheme.cellDefault,
                  scheme.cellDefaultAlignRight
                ],
                [
                  scheme.cellDefault,
                  scheme.cellDefault,
                  scheme.cellDefaultAlignRight
                ],
                [
                  scheme.cellDefault,
                  scheme.cellDefault,
                  scheme.cellDefaultAlignRight
                ],
                [
                  scheme.cellDefault,
                  scheme.cellDefault,
                  scheme.cellDefaultAlignRight
                ],
                [
                  scheme.cellDefault,
                  scheme.cellDefault,
                  scheme.cellDefaultAlignRight
                ],
                [
                  scheme.cellBlueBold,
                  scheme.cellBlueBold,
                  scheme.cellBlueRedBold
                ],
                [
                  scheme.cellBlueBold,
                  scheme.cellBlueBold,
                  scheme.cellBlueRedBold
                ]
              ]}
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical Forecast Accuracy
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical Forecast Bias
              </Typography>
            </CardContent>
            <LineColumnChart range="DC Historical forecast bias!A:C" />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const KPISInternationalIL = withStyles(styles)(KPISComponent);

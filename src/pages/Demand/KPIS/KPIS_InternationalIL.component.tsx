import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { LineColumnChart } from "src/charts/LineColumnChart";
import { ColumnLineChart } from "src/charts/TradedFlowChart";
import { CommonTable } from "src/tables/table/CommonTable";
import { scheme } from "src/tables/table/tableScheme";
import { colors } from "src/theme";

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
    fontSize: 16,
    color: colors.mainColor,
    marginTop: 24,
    marginLeft: 24
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
                IL Offtake Forecast Accuracy & bias
              </Typography>
            </CardContent>
            <Typography className={classes.subTitle}>
              Forecast Accuracy
            </Typography>
            <CommonTable
              range="IL Offtake Forecast Accuracy"
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
            <Typography className={classes.subTitle}>Forecast Bias</Typography>
            <CommonTable
              range="International IL - KPIS Forecast Bias"
              styleRows={[
                scheme.rowBlue,
                scheme.rowGrey,
                scheme.rowGrey,
                scheme.rowGrey,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowGrey,
                scheme.rowGrey,
                scheme.rowGrey,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowDefault,
                scheme.rowGrey,
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
            <ColumnLineChart range="IL Historical Forecast Accuracy!A:C" />
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Historical Forecast Bias
              </Typography>
            </CardContent>
            <LineColumnChart range="IL Historical forecast bias!A:C" />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const KPISInternationalIL = withStyles(styles)(KPISComponent);

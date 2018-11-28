import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import { CustomTable } from "src/table/Table";
import { ColumnChart } from "../../charts/ColumnChart";
import { LineChart } from "../../charts/LineChart";
import { LineColumnChart } from "../../charts/LineColumnChart";

const styles = {
  root: {
    padding: 24
  }
};
const KPISComponent = (props: any) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <CustomTable />
        </Grid>
        <Grid item={true} xs={4}>
          <Card>
            <CardContent>
              <ColumnChart />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={4}>
          <Card>
            <CardContent>
              <LineChart />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={4}>
          <Card>
            <CardContent>
              <LineColumnChart />{" "}
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <LineColumnChart />{" "}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const KPIS = withStyles(styles)(KPISComponent);

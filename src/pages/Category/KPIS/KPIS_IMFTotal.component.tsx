import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { CategoryKPISTable } from "src/tables/CategoryKPISTable";

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
                KPIs
              </Typography>
              <CategoryKPISTable range="Category Total IMF KPIS!A:G" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const KPISIMFTotal = withStyles(styles)(KPISComponent);

import { Card, CardContent, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";

const styles = {
  root: {
    padding: 24
  },
  title: {
    fontWeight: 700,
    fontSize: 16,
    marginBottom: 16
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
const SummaryDefinitions = (props: any) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.title}>
                Work in Progress
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const SummaryDefinitionsIMFTotal = withStyles(styles)(
  SummaryDefinitions
);

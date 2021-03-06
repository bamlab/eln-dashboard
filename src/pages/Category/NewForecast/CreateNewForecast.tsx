import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { ColumnLineChart } from "src/charts/TradedFlowChart";
import { CardHeader } from "src/components/CardHeader";
import { colors } from "src/theme";

const blueTitleStyle: React.CSSProperties = {
  fontWeight: "bold",
  paddingLeft: 12
};

const styles = {
  root: {
    padding: 24
  },
  font: {
    fontWeight: 700,
    fontSize: 16
  }
};

const textBoxStyle: React.CSSProperties = {
  border: "solid 1px",
  borderRadius: 5,
  padding: 10
};

const textBoxWrapper: React.CSSProperties = {
  width: 300,
  margin: 15,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const whiteButtonStyle: React.CSSProperties = {
  backgroundColor: "white",
  color: colors.mainColor,
  borderRadius: 40,
  borderColor: colors.mainColor,
  fontWeight: "bold",
  border: "solid 2px",
  padding: "6px 11px",
  marginRight: 10,
  textTransform: "none"
};

const refreshPage = () => {
  window.location.reload();
};

const navigateToExcel = () => {
  window.open(
    "https://docs.google.com/spreadsheets/d/1rUencQt965RIFAGXac1VkyDEnx9TmId6Z-4NbC-8Sts/edit#gid=1875028004"
  );
};

const CreateNewForecastComponent = (props: any) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Typography color="primary" style={blueTitleStyle}>
          INPUT DATA
        </Typography>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <CardHeader
                className={classes.font}
                title="Trend of newborn population"
              >
                <Button
                  style={whiteButtonStyle}
                  onClick={navigateToExcel}
                  // variant="outlined"
                >
                  Change data in Excel
                </Button>
                <Button
                  style={{
                    backgroundColor: colors.mainColor,
                    color: "white",
                    borderRadius: 40,
                    fontWeight: "bold",
                    textTransform: "none"
                  }}
                  onClick={refreshPage}
                >
                  Refresh
                </Button>
              </CardHeader>
              <div style={{ display: "flex" }}>
                <ColumnLineChart
                  range="Create New forecast newborn"
                  customOptions={{
                    yAxis: {
                      gridLineWidth: 0,
                      title: null,
                      labels: {
                        formatter() {
                          const self: any = this as any;
                          return `${Math.floor(self.value)}`;
                        }
                      }
                    },
                    tooltip: {
                      formatter() {
                        const self: any = this as any;
                        return `${Math.floor(self.y)}`;
                      }
                    }
                  }}
                />
                <div style={textBoxWrapper}>
                  <div style={textBoxStyle}>
                    <div style={{ textAlign: "center", fontWeight: "bold" }}>
                      11,2
                    </div>
                    <div style={{ paddingTop: 20 }}>
                      Ton category per 1% higher newborn population
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <CardHeader
                className={classes.font}
                title="Trend of pure breastfeeding rate (0-6months) (%)"
              >
                <Button
                  style={whiteButtonStyle}
                  onClick={navigateToExcel}
                  // variant="outlined"
                >
                  Change data in Excel
                </Button>
                <Button
                  style={{
                    backgroundColor: colors.mainColor,
                    color: "white",
                    borderRadius: 40,
                    fontWeight: "bold",
                    textTransform: "none"
                  }}
                  onClick={refreshPage}
                >
                  Refresh
                </Button>
              </CardHeader>
              <div style={{ display: "flex" }}>
                <ColumnLineChart range="Create New Forecast Breastfeeding rate" />
                <div style={textBoxWrapper}>
                  <div style={textBoxStyle}>
                    <div style={{ textAlign: "center", fontWeight: "bold" }}>
                      9,6
                    </div>
                    <div style={{ paddingTop: 20 }}>
                      Ton category per 1% lower breastfeeding rate
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Typography color="primary" style={blueTitleStyle}>
          FORECAST RESULT
        </Typography>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Forecast Result (kt)
              </Typography>
              <ColumnLineChart
                range="Create New forecast result!F:H"
                customOptions={{
                  yAxis: {
                    gridLineWidth: 0,
                    title: null,
                    labels: {
                      formatter() {
                        const self: any = this as any;
                        return `${Math.floor(self.value)}`;
                      }
                    }
                  },
                  tooltip: {
                    formatter() {
                      const self: any = this as any;
                      return `${Math.floor(self.y)}`;
                    }
                  }
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Typography color="primary" style={blueTitleStyle}>
          SENSE CHECK
        </Typography>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Category forecast by market research firm A (‘000 ton)
              </Typography>
              <ColumnLineChart
                range="Category forecast by market research firm A (‘000 ton)"
                customOptions={{
                  yAxis: {
                    gridLineWidth: 0,
                    title: null,
                    labels: {
                      formatter() {
                        const self: any = this as any;
                        return `${Math.floor(self.value)}`;
                      }
                    }
                  },
                  tooltip: {
                    formatter() {
                      const self: any = this as any;
                      return `${Math.floor(self.y)}`;
                    }
                  },
                  legend: { enabled: false }
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Baby diapers market size forecast by market research firm B (bn
                pieces)
              </Typography>
              <ColumnLineChart
                range="Baby diapers market size forecast by market research firm B (bn pieces)"
                customOptions={{
                  yAxis: {
                    gridLineWidth: 0,
                    title: null,
                    labels: {
                      formatter() {
                        const self: any = this as any;
                        return `${Math.floor(self.value)}`;
                      }
                    }
                  },
                  tooltip: {
                    formatter() {
                      const self: any = this as any;
                      return `${Math.floor(self.y)}`;
                    }
                  },
                  legend: { enabled: false }
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item={true} xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom={true} className={classes.font}>
                Category forecast by competitor X (‘000 ton)
              </Typography>
              <ColumnLineChart
                range="Category forecast by competitor X (‘000 ton)"
                customOptions={{
                  yAxis: {
                    gridLineWidth: 0,
                    title: null,
                    labels: {
                      formatter() {
                        const self: any = this as any;
                        return `${Math.floor(self.value)}`;
                      }
                    }
                  },
                  tooltip: {
                    formatter() {
                      const self: any = this as any;
                      return `${Math.floor(self.y)}`;
                    }
                  },
                  legend: { enabled: false }
                }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export const CreateNewForecast = withStyles(styles)(CreateNewForecastComponent);

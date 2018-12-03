import { createMuiTheme } from "@material-ui/core/styles";

export const colors = {
  mainColor: "#026AB5",
  accentColor: "#029FE3",
  secondaryColor: "#A1DAF7",
  tertiaryColor: "#002677",
  successColor: "#65A124",
  errorColor: "#D0021B",
  mainFontColor: "#3C3C3C",
  secondaryFontColor: "#AAACAE",
  tertiaryFontColor: "#99C3E1",
  backgroundSecondaryColor: "#EDF9FE"
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.mainColor
    }
  }
});

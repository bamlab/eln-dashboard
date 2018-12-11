import { colors } from "../../theme";

export const scheme = {
  blackBold: (cell: any) => ({
    color: "black",
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600
  }),
  whiteBold: (cell: any) => ({
    color: "white",
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600
  }),
  whiteBoldAlignRight: (cell: any) => ({
    color: "white",
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600,
    textAlign: "right"
  }),
  blueBold: (cell: any) => ({
    color: colors.mainColor,
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600
  }),
  default: (cell: any) => ({
    color: "black",
    borderBottom: 0,
    fontSize: 14
  }),
  numberCell: (cell: any) => {
    let color;
    if ((cell + "").startsWith("-")) {
      color = "red";
    } else {
      color = "green";
    }
    return {
      color,
      borderBottom: 0,
      fontSize: 14,
      textAlign: "right"
    };
  },
  rowDefault: {
    backgroundColor: "white"
  },
  rowBlue: {
    backgroundColor: colors.mainColor
  },
  rowGrey: {
    backgroundColor: "rgba(161,218,247,0.15)"
  }
};

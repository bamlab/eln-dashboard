import { colors } from "../../theme";

export type CellCSSProperty = (cell?: string) => React.CSSProperties;

export const scheme: {
  [key: string]: CellCSSProperty;
} = {
  blackBold: () => ({
    color: "black",
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600
  }),
  whiteBold: () => ({
    color: "white",
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600
  }),
  whiteBoldAlignRight: () => ({
    color: "white",
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600,
    textAlign: "right"
  }),
  blueBold: () => ({
    color: colors.mainColor,
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600
  }),
  default: () => ({
    color: "black",
    borderBottom: 0,
    fontSize: 14
  }),
  numberCell: cell => {
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
  absoluteRedGreen: cell => {
    const isOrange = (cell + "").match(/^[-]?[1]\d/);
    const isRed = (cell + "").match(/^[-]?[23456789]\d/);
    const color = isOrange
      ? colors.fourthColor
      : isRed
      ? colors.errorColor
      : "black";
    return {
      color,
      borderBottom: 0,
      fontSize: 14,
      textAlign: "right"
    };
  },
  rowDefault: () => ({
    backgroundColor: "white"
  }),
  rowBlue: () => ({
    backgroundColor: colors.mainColor
  }),
  rowGrey: () => ({
    backgroundColor: "rgba(161,218,247,0.15)"
  })
};

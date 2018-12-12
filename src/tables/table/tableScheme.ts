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
  whiteAlignRight: () => ({
    color: "white",
    borderBottom: 0,
    fontSize: 14,
    textAlign: "right"
  }),
  blueBold: () => ({
    color: colors.mainColor,
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600
  }),
  blueBoldAlignRight: () => ({
    color: colors.mainColor,
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600,
    textAlign: "right"
  }),
  default: () => ({
    color: "black",
    borderBottom: 0,
    fontSize: 14
  }),
  numberCell: cell => {
    let color;
    if ((cell + "").startsWith("-")) {
      color = colors.errorColor;
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
  boldNumberCell: cell => {
    let color;
    if ((cell + "").startsWith("-")) {
      color = colors.errorColor;
    } else {
      color = "green";
    }
    return {
      color,
      borderBottom: 0,
      fontSize: 14,
      fontWeight: 600,
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
  blueBoldNoWrap: () => ({
    whiteSpace: "nowrap",
    color: colors.mainColor,
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600
  }),
  alignRightCell: () => ({
    color: "black",
    borderBottom: 0,
    fontSize: 14,
    textAlign: "right"
  }),
  blackNumberCell: cell => {
    let color;
    if ((cell + "").startsWith("-") || (cell + "").startsWith("(")) {
      color = colors.errorColor;
    } else {
      color = "black";
    }
    return {
      color,
      borderBottom: 0,
      fontSize: 14,
      textAlign: "right"
    };
  },
  boldBlueNumberCell: cell => {
    let color;
    if ((cell + "").startsWith("-") || (cell + "").startsWith("(")) {
      color = colors.errorColor;
    } else {
      color = colors.mainColor;
    }
    return {
      color,
      borderBottom: 0,
      fontSize: 14,
      fontWeight: 600,
      textAlign: "right"
    };
  },
  boldWhiteNumberCell: cell => {
    let color;
    if ((cell + "").startsWith("-") || (cell + "").startsWith("(")) {
      color = colors.lightError;
    } else {
      color = "white";
    }
    return {
      color,
      borderBottom: 0,
      fontSize: 14,
      fontWeight: 600,
      textAlign: "right"
    };
  },
  rowDefault: () => ({
    backgroundColor: "white"
  }),
  rowSmallDefault: () => ({
    backgroundColor: "white",
    height: 30
  }),
  rowBlue: () => ({
    backgroundColor: colors.mainColor
  }),
  rowSmallBlue: () => ({
    backgroundColor: colors.mainColor,
    height: 30
  }),
  rowGrey: () => ({
    backgroundColor: "rgba(161,218,247,0.15)"
  }),
  rowSmallGrey: () => ({
    backgroundColor: "rgba(161,218,247,0.15)",
    height: 30
  })
};

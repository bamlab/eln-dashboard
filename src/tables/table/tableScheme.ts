import { colors } from "../../theme";

export type CellCSSProperty = (cell?: string) => React.CSSProperties;

export const scheme: {
  cellBlackBold: CellCSSProperty;
  cellWhiteBold: CellCSSProperty;
  cellWhiteBoldNoWrap: CellCSSProperty;
  cellWhiteBoldAlignRight: CellCSSProperty;
  cellWhiteAlignRight: CellCSSProperty;
  cellBlueBold: CellCSSProperty;
  cellBlueBoldAlignRight: CellCSSProperty;
  cellDefault: CellCSSProperty;
  cellRedGreenBold: CellCSSProperty;
  cellOrangeRedBlack: CellCSSProperty;
  cellBlueBoldNoWrap: CellCSSProperty;
  cellRedGreen: CellCSSProperty;
  cellDefaultAlignRight: CellCSSProperty;
  cellDefaultAlignCenter: CellCSSProperty;
  cellRedBlack: CellCSSProperty;
  cellBlueRedBold: CellCSSProperty;
  cellWhiteGreyBold: CellCSSProperty;
  cellDefaultBoldNoWrap: CellCSSProperty;
  cellDefaultNoWrap: CellCSSProperty;
  cellWhiteBoldAlignRightNoWrap: CellCSSProperty;
  rowDefault: CellCSSProperty;
  rowSmallDefault: CellCSSProperty;
  rowBlue: CellCSSProperty;
  rowSmallBlue: CellCSSProperty;
  rowSmallGrey: CellCSSProperty;
  rowGrey: CellCSSProperty;
} = {
  cellBlackBold: () => ({
    color: "black",
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600
  }),
  cellWhiteBold: () => ({
    color: "white",
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600
  }),
  cellWhiteBoldNoWrap: () => ({
    whiteSpace: "nowrap",
    color: "white",
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600
  }),
  cellWhiteBoldAlignRight: () => ({
    color: "white",
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600,
    textAlign: "right"
  }),
  cellWhiteAlignRight: () => ({
    color: "white",
    borderBottom: 0,
    fontSize: 14,
    textAlign: "right"
  }),
  cellBlueBold: () => ({
    color: colors.mainColor,
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600
  }),
  cellBlueBoldAlignRight: () => ({
    color: colors.mainColor,
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600,
    textAlign: "right"
  }),
  cellDefault: () => ({
    color: "black",
    borderBottom: 0,
    fontSize: 14
  }),
  cellRedGreen: cell => {
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
  cellRedGreenBold: cell => {
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
  cellOrangeRedBlack: cell => {
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
  cellBlueBoldNoWrap: () => ({
    whiteSpace: "nowrap",
    color: colors.mainColor,
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600
  }),
  cellDefaultBoldNoWrap: () => ({
    whiteSpace: "nowrap",
    width: 20,
    color: "black",
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600
  }),
  cellDefaultNoWrap: () => ({
    whiteSpace: "nowrap",
    width: 20,
    color: "black",
    borderBottom: 0,
    fontSize: 14
  }),
  cellWhiteBoldAlignRightNoWrap: () => ({
    whiteSpace: "nowrap",
    color: "white",
    borderBottom: 0,
    fontSize: 14,
    fontWeight: 600,
    textAlign: "right"
  }),
  cellDefaultAlignRight: () => ({
    color: "black",
    borderBottom: 0,
    fontSize: 14,
    textAlign: "right"
  }),
  cellDefaultAlignCenter: () => ({
    color: "black",
    borderBottom: 0,
    fontSize: 14,
    textAlign: "center"
  }),
  cellRedBlack: cell => {
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
  cellBlueRedBold: cell => {
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
  cellWhiteGreyBold: cell => {
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
    backgroundColor: "white",
    height: 30
  }),
  rowSmallDefault: () => ({
    backgroundColor: "white",
    height: 30
  }),
  rowBlue: () => ({
    backgroundColor: colors.mainColor,
    height: 30
  }),
  rowSmallBlue: () => ({
    backgroundColor: colors.mainColor,
    height: 30
  }),
  rowGrey: () => ({
    backgroundColor: "rgba(161,218,247,0.15)",
    height: 30
  }),
  rowSmallGrey: () => ({
    backgroundColor: "rgba(161,218,247,0.15)",
    height: 30
  })
};

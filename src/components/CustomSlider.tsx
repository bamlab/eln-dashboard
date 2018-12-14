import { TextField, Typography, withStyles } from "@material-ui/core";
import Slider from "@material-ui/lab/Slider";
import * as React from "react";
import { colors } from "src/theme";

interface IProps {
  classes: { [key: string]: any };
  list: string[];
  onChange?: (value: number) => void;
}

interface IState {
  value: number;
}

const styles = {
  input: {
    color: colors.mainColor,
    fontWeight: 700
  },
  underline: {
    "&:before": {
      borderBottomColor: colors.mainColor
    },
    "&:after": {
      borderBottomColor: colors.mainColor
    },
    "&:hover:before": {
      borderBottomColor: [colors.mainColor, "!important"]
    }
  }
};

class AppSlider extends React.Component<IProps, IState> {
  public state = {
    value: this.props.list.length - 1
  };

  public handleChange = (event: any, value: number) => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  public render() {
    const { value } = this.state;
    const { classes, list } = this.props;

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Typography style={{ marginTop: 30, fontWeight: 700 }}>
          Month:
        </Typography>
        <Slider
          value={value}
          onChange={this.handleChange}
          step={1}
          min={0}
          max={list.length - 1}
          style={{
            marginTop: 46,
            marginLeft: 30,
            marginRight: 30,
            color: colors.mainColor,
            fontWeight: 700
          }}
        />
        <TextField
          value={list[value]}
          style={{ marginTop: 15 }}
          InputProps={{
            classes: {
              input: classes.input,
              underline: classes.underline
            }
          }}
        />
      </div>
    );
  }
}

// @ts-ignore
export const CustomSlider = withStyles(styles)(AppSlider);

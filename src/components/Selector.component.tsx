import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import { colors } from "../theme";

const styles = {
  root: {
    marginLeft: 16,
    marginRight: 16,
    fontWeight: 700,
    fontSize: "0.875rem",
    paddingTop: 2
  },
  iconWhite: {
    fill: "white"
  },
  iconBlue: {
    fill: colors.mainColor
  }
};

interface IPropsType {
  onChange: (value: string) => void;
  defaultDisplayedValue: string;
  valueList: string[];
  classes: { [key: string]: string };
  style?: any;
  iconColor?: string;
}

class SelectMenu extends React.Component<IPropsType> {
  public static defaultProps = {
    defaultDisplayedValue: "",
    style: {},
    iconColor: "white"
  };
  public state = {
    displayedValue: this.props.defaultDisplayedValue
  };

  public handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value }, () =>
      this.props.onChange(this.state.displayedValue)
    );
  };
  public render() {
    const { classes } = this.props;
    return (
      <Select
        value={this.state.displayedValue}
        onChange={this.handleChange}
        className={classes.root}
        classes={{
          icon:
            this.props.iconColor === "blue"
              ? classes.iconBlue
              : classes.iconWhite
        }}
        style={this.props.style}
        inputProps={{
          name: "displayedValue"
        }}
        disableUnderline={true}
      >
        {this.props.valueList.map(value => (
          <MenuItem value={value} key={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    );
  }
}

export const Selector = withStyles(styles)(SelectMenu);

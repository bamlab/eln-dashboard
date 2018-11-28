import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";

const styles = {
  focused: {
    color: "white",
    marginLeft: 16,
    marginRight: 16,
    fontWeight: 700
  },
  notFocused: {
    color: "white",
    marginLeft: 16,
    marginRight: 16,
    opacity: 0.6,
    fontWeight: 700
  },
  icon: {
    fill: "white"
  },
  outlined: {
    backgroundColor: "white"
  }
};

interface IPropsType {
  onChange: (value: string) => void;
  defaultDisplayedValue: string;
  valueList: string[];
  classes: { [key: string]: string };
  focus?: boolean;
}

class SelectMenu extends React.Component<IPropsType> {
  public static defaultProps = {
    defaultDisplayedValue: "",
    focus: true
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
        classes={{
          icon: classes.icon,
          root: this.props.focus ? classes.focused : classes.notFocused
        }}
        inputProps={{
          name: "displayedValue"
        }}
        disableUnderline={true}
      >
        {this.props.valueList.map(value => (
          <MenuItem value={value}>{value}</MenuItem>
        ))}
      </Select>
    );
  }
}

export const Selector = withStyles(styles)(SelectMenu);

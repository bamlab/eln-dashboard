import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";
import { StyleRules, withStyles } from "@material-ui/core/styles";
import * as React from "react";
import { colors } from "../theme";

const styles: StyleRules = {
  root: {
    marginLeft: 16,
    marginRight: 16,
    fontWeight: 700,
    height: 35,
    fontSize: "0.875rem",
    color: colors.mainColor,
    backgroundColor: "white"
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
          icon: classes.iconBlue
        }}
        style={this.props.style}
        inputProps={{
          name: "displayedValue"
        }}
        disableUnderline={true}
        input={<OutlinedInput labelWidth={0} />}
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

export const SelectorOutlined = withStyles(styles)(SelectMenu);

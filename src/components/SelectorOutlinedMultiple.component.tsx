import { Checkbox, ListItemText, OutlinedInput } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
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

interface IProps {
  classes: { [key: string]: string };
  defaultValues: string[];
  valueList: string[];
}

class SelectMenu extends React.Component<IProps> {
  public static defaultProps = {
    defaultValues: []
  };
  public state = {
    name: this.props.defaultValues
  };

  public handleChange = (event: any) => {
    this.setState({ name: event.target.value });
  };
  public renderValue = (selected: any) => selected.join(", ");
  public render() {
    const { classes } = this.props;
    return (
      <Select
        multiple={true}
        value={this.state.name}
        onChange={this.handleChange}
        renderValue={this.renderValue}
        input={<OutlinedInput labelWidth={0} />}
        className={classes.root}
      >
        {this.props.valueList.map(name => (
          <MenuItem key={name} value={name}>
            <Checkbox
              checked={this.state.name.includes(name)}
              color="primary"
            />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    );
  }
}

export const SelectorOutlinedMultiple = withStyles(styles)(SelectMenu);

import { withStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import * as React from "react";
import { colors } from "src/theme";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row" as "row"
  },
  label: {
    fontWeight: 600,
    color: colors.mainColor
  }
};

interface IProps {
  valueList: string[];
  classes: { [key: string]: any };
}

interface IState {
  selectedValue: string;
}

export class RadioButtonsComponent extends React.Component<IProps, IState> {
  public state = {
    selectedValue: this.props.valueList[0]
  };
  public handleChange = (event: React.ChangeEvent<{}>, value: string) => {
    this.setState({ selectedValue: value });
  };
  public render() {
    const { classes } = this.props;
    return (
      <FormControl component="fieldset">
        <RadioGroup
          classes={{
            root: classes.root
          }}
          value={this.state.selectedValue}
          onChange={this.handleChange}
        >
          {this.props.valueList.map(el => (
            <FormControlLabel
              value={el}
              control={<Radio color="primary" />}
              label={el}
              classes={{
                label: classes.label
              }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
  }
}

export const RadioButtons = withStyles(styles)(RadioButtonsComponent);

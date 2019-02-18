import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import "./dropdown.css";

const styles = theme => ({
  root: {
    display: "block",
    borderRadius: "100px",
    borderColor: "#ffffff"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 125,
    borderColor: '#ffffff'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit
  }
});

class SimpleSelect extends React.Component {
  state = {
    age: ""
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          />
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value={10}>VIC</MenuItem>
            <MenuItem value={20}>NSW</MenuItem>
            <MenuItem value={30}>QLD</MenuItem>
            <MenuItem value={30}>SA</MenuItem>
            <MenuItem value={30}>TAS</MenuItem>
            <MenuItem value={30}>WA</MenuItem>
            <MenuItem value={30}>NT</MenuItem>
          </Select>
        </FormControl>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);

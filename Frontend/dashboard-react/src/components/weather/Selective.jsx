import React from 'react';
import PropTypes from 'prop-types';
import { 
    withStyles,
    Input,
    InputLabel,
    MenuItem, 
    FormHelperText,
    FormControl,
    Select 
} from 'material-ui';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  state = {
    catagory: '',
    condition: '',
    value: '',
    location: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.form}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="catagory">Catagory</InputLabel>
          <Select
            value={this.state.catagory}
            onChange={this.handleChange}
            input={<Input name="catagory" id="catagory" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Temperature">Temperature</MenuItem>
            <MenuItem value="Windy">Windy</MenuItem>
            <MenuItem value="Humidity">Humidity</MenuItem>
            <MenuItem value="Cloudiness">Cloudiness</MenuItem>
            <MenuItem value="Sunny">Sunny</MenuItem>
            <MenuItem value="Rain">Rain</MenuItem>
            <MenuItem value="Pressure">Pressure</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="condition">Condition</InputLabel>
          <Select
            value={this.state.condition}
            onChange={this.handleChange}
            input={<Input name="condition" id="condition" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value=" <= "> less than </MenuItem>
            <MenuItem value=" >= "> more than </MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="value">Value</InputLabel>
          <Select
            value={this.state.value}
            onChange={this.handleChange}
            input={<Input name="value" id="value"/>}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="location">Location</InputLabel>
          <Select
            value={this.state.location}
            onChange={this.handleChange}
            input={<Input name="location"/>}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="hai">Berlin</MenuItem>
            <MenuItem value="olivier">add map here</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);

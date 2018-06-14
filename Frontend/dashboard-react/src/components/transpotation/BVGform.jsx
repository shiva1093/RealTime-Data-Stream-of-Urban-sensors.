import React from "react";
import PropTypes from "prop-types";
// creates a beautiful scrollbar
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { withStyles } from "material-ui";
import { Grid, InputLabel, Input,FormControl, TextField, Select,MenuItem,FormHelperText } from "material-ui";
import {
    ProfileCard,
    RegularCard,
    Button,
    CustomInput,
    ItemGrid,
} from "../../components/baseItems";

import appStyle from "../../assets/jss/material-dashboard-react/appStyle.jsx";

const styles = theme => ({

    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        width:50,
    },
    TextField: {
        minWidth: 120,
    },
});
class BVGform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {numberOfTransport: '', redirectToNewPage: false, transportType: '', transportValue: '', timeOfTransport: '',};


    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }



    handleSubmit = e => {
        alert('TransportType: ' + this.state.transportType);
        alert('numberOfTransport: ' + this.state.numberOfTransport);
        alert('transportTime: ' + this.state.timeOfTransport);
        e.preventDefault();
        //redirect to new page
    }

    validateForm() {
       return this.state.transportType.length > 0 && this.state.numberOfTransport.length > 0;
    }

   /* handleChangeTimePicker = (e, date) => {
        this.setState({timeOfTransport: date});
    };*/


    validateDropdown() {
        return this.state.transportValue.length >0;
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid item xs={12} sm={12} md={8}>
                <RegularCard
                    cardTitle="Configure BVG Rules"
                    content={ <div className={classes.container}>
                        <form onSubmit={this.handleSubmit}>
                            <FormControl className={classes.formControl} style = {{width: 500}}>
                                    <InputLabel htmlFor="age-helper">Type of Transport</InputLabel>
                                    <Select
                                        name="transportType"
                                        value={this.state.transportType}
                                        onChange={e=>this.handleChange(e)}
                                        input={<Input name="transportType" id="age-helper" />}
                                    >
                                        <MenuItem value="" disabled>
                                            <em>Select Transport</em>
                                        </MenuItem>
                                        <MenuItem value={'BUS'}>Bus</MenuItem>
                                        <MenuItem value={'TRAM'}>Tram</MenuItem>
                                        <MenuItem value={'UBAHN'}>Ubhan</MenuItem>
                                    </Select>
                                    {/*<FormHelperText>Some important helper text</FormHelperText>*/}
                            </FormControl>
                            <FormControl className={classes.formControl} style = {{width: 500}}>
                                <InputLabel htmlFor="age-helper">Amount of Trains/Buses/Trams</InputLabel>
                                <Select
                                    name="transportValue"
                                    value={this.state.transportValue}
                                    onChange={e=>this.handleChange(e)}
                                    input={<Input name="transportValue" id="age-helper" />}
                                >
                                    <MenuItem value={'<='}>{'<='}</MenuItem>
                                    <MenuItem value={'>='}>{'>='}</MenuItem>
                                    <MenuItem value={'=='}>{'=='}</MenuItem>
                                </Select>
                                {/*<FormHelperText>Some important helper text</FormHelperText>*/}
                            </FormControl>
                            <FormControl className={classes.formControl} style = {{width: 500}}>
                                <TextField
                                    required
                                    id="numberOfTransport-input"
                                    disabled={!this.validateDropdown()}
                                    label="Number of trains/buses/trams"
                                    className={classes.textField}
                                    onChange={e=>this.handleChange(e)}
                                    type="text"
                                    name="numberOfTransport"
                                    margin="normal"
                                />
                            </FormControl>
                            <FormControl className={classes.formControl} style = {{width: 500}}>
                            <TextField
                                id="time"
                                type="time"
                                defaultValue="07:30"
                                className={classes.textField}
                                onChange={e=>this.handleChange(e)}
                                name="timeOfTransport"


                            />

                                {/*<TimeInput
                                    mode='12h'
                                    value={this.state.timeOfTransport}
                                    onChange={this.handleChangeTimePicker}
                                />*/}
                                {<FormHelperText>Specify the Time</FormHelperText>}
                            </FormControl>
                            <Button label="Submit"  disabled={!this.validateForm()} color='primary' type="submit">Login</Button>
                        </form>
                    </div>}
                />

            </Grid>


        );
    }
}

BVGform.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(BVGform);

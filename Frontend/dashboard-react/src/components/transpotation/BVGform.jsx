import React from "react";
import PropTypes from "prop-types";
// creates a beautiful scrollbar
import "perfect-scrollbar/css/perfect-scrollbar.css";
import {withStyles} from "material-ui";
import {Grid, InputLabel, Input, FormControl, MenuItem} from "material-ui";
import Select from '@material-ui/core/Select';
import TextField from 'material-ui/TextField';
import Maps from "../../views/Maps/Maps.jsx";
import {
    ProfileCard,
    RegularCard,
    Button,
    CustomInput,
    ItemGrid,

} from "../../components/baseItems";

import appStyle from "../../assets/jss/material-dashboard-react/appStyle.jsx";
import NestedCheckbox from "./NestedCheckbox";


const formControlStyles = {
    width: 600,


};

const mapsControlStyles = {
    width: 800,

};

class BVGform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkAll: false,
            numberOfTransport: '',
            transportType: [],
            transportName: 'BUS',
            transportValue: '',
        };
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    /* Retrieve values from Maps.jsx */
    maps = (googleMap) => {
        alert('Radius:' + googleMap.getRadius())
        alert('LatLngBounds of this Circle:' + googleMap.getBounds())
        alert('Center of this circle:' + googleMap.getCenter())
    }

    handleSubmit = e => {
        alert('TransportType: ' + this.state.transportName);
        alert('numberOfTransport: ' + this.state.transportType);
        alert('transportTime: ' + this.state.timeOfTransport);
        e.preventDefault();
        //redirect to new page
    }

    validateForm() {
        return this.state.transportName.length > 0 && this.state.numberOfTransport.length > 0;
    }

    validateDropdown() {
        return this.state.transportValue.length > 0;
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid item xs={18} sm={12} md={8}>
                <div className={classes.container}>
                    <form onSubmit={this.handleSubmit}>
                        <FormControl className={classes.formControl} style={formControlStyles}>
                            <TextField
                                id="transportName"
                                label="Transport Name"
                                type="text"
                                defaultValue="BUS"
                                margin="normal"
                                className={classes.textField}
                                name="transportName"
                                disabled
                            />
                        </FormControl>
                        <FormControl className={classes.formControl} style={mapsControlStyles}>
                            <NestedCheckbox/>
                        </FormControl>
                        <FormControl className={classes.formControl} style={formControlStyles}>
                            <InputLabel htmlFor="age-helper">Amount of Trains/Buses/Trams</InputLabel>
                            <Select
                                name="transportValue"
                                value={this.state.transportValue}
                                onChange={e => this.handleChange(e)}
                                input={<Input name="transportValue" id="age-helper"/>}
                            >
                                <MenuItem value={'<='}>{'<='}</MenuItem>
                                <MenuItem value={'>='}>{'>='}</MenuItem>
                                <MenuItem value={'=='}>{'=='}</MenuItem>
                            </Select>
                            {/*<FormHelperText>Some important helper text</FormHelperText>*/}
                        </FormControl>
                        <FormControl className={classes.formControl} style={formControlStyles}>
                            <TextField
                                id="numberOfTransport-input"
                                disabled={!this.validateDropdown()}
                                label="Number of trains/buses/trams"
                                className={classes.textField}
                                onChange={e => this.handleChange(e)}
                                type="text"
                                name="numberOfTransport"
                                margin="normal"
                            />
                        </FormControl>
                        <FormControl className={classes.formControl} style={mapsControlStyles}>
                            <Maps maps={this.maps}/>
                        </FormControl>
                        <Button label="Submit" disabled={!this.validateForm()} color="info"
                                type="submit">Submit</Button>
                    </form>
                </div>


            </Grid>


        );
    }
}

BVGform.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(BVGform);

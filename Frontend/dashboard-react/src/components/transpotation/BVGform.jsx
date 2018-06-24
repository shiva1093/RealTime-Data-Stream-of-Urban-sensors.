import React from "react";
import PropTypes from "prop-types";
// creates a beautiful scrollbar
import "perfect-scrollbar/css/perfect-scrollbar.css";
import AddAlert from "@material-ui/icons/AddAlert";
import {withStyles} from "material-ui";
import {Grid, InputLabel, Input, FormControl, MenuItem} from "material-ui";
import Select from '@material-ui/core/Select';
import TextField from 'material-ui/TextField';
//core components
import Snackbar from "../../components/baseLayout/Snackbar/Snackbar.jsx";
import  ShowNumberofTransport from "./transportComponents/numberOfTransportComponent"
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
            open: false,
            place: 'bc',
            showNumberofTransport: false
        };
    }

    showNotification(){
        var type = 'info';
        this.setState({open: true, color: type});
        setTimeout(function(){
            this.setState({open: false});
        }.bind(this),6000);
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    onClick() {
        this.setState({showNumberofTransport: true});

    }

    /* Retrieve values from Maps.jsx */
    maps = (googleMap) => {
        alert('Radius:' + googleMap.getRadius())
        alert('LatLngBounds of this Circle:' + googleMap.getBounds())
        alert('Center of this circle:' + googleMap.getCenter())
    }

    numberofTransport = (val) => {
        console.log(val);
        alert('numberofTransport:' + val)
        this.setState({numberOfTransport: val});
    }

    handleSubmit = e => {
        this.showNotification();
        alert('TransportType: ' + this.state.transportName);
        alert('numberOfTransport: ' + this.state.numberOfTransport);
        e.preventDefault();
        //redirect to new page
    }

    validateForm() {
        return this.state.transportName.length > 0 && this.state.numberOfTransport.length > 0;
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
                                onClick={this.onClick.bind(this)}
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

                        { this.state.showNumberofTransport ? <ShowNumberofTransport
                            numberofTransport ={this.numberofTransport}/>  : null }

                        <FormControl className={classes.formControl} style={mapsControlStyles}>
                            <Maps maps={this.maps}/>
                        </FormControl>
                        <Button label="Submit" disabled={!this.validateForm()} color="info"
                                type="submit">Submit</Button>
                        <Snackbar
                            place={this.state.place}
                            color={this.state.color}
                            icon={AddAlert}
                            message="New Rule Successfully Added"
                            open={this.state.open}
                            closeNotification={() => this.setState({open:false})}
                            close
                        />
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

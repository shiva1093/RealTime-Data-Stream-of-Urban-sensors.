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
import  {ShowNumberofTransport,ShowNumberofTransportDropdown,ShowNumberofTransportSlider} from "./transportComponents/numberOfTransportComponent"
import Maps from "../../views/Maps/Maps.jsx";
import ExampleRadioUsage from "./transportComponents/checkboxTransportComponent"
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
    paddingTop: 20,

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
            showNumberofTransport: false,
            toggleRadioDropdown: false,
            numberofTransportSlider: ''
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


    /* Retrieve values from Maps.jsx */
    maps = (googleMap) => {
        alert('Radius:' + googleMap.getRadius())
        alert('LatLngBounds of this Circle:' + googleMap.getBounds())
        alert('Center of this circle:' + googleMap.getCenter())
    }

    numberofTransport = (val) => {
        console.log('numberofTransport:' + val)
        this.setState({numberOfTransport: val});
    }

    numberofTransportDropdown = (val) => {
       console.log('numberofTransportDropdown:' + val)
        this.setState({transportValue: val});
        if(val)
        {
            this.setState({showNumberofTransport: true});

        }
    }

    numberofTransportSlider = (val) => {
        console.log('numberofTransportSlider:' + val)
        //this.setState({numberofTransportSlider: val});
    }

    toggleRadioButton = (val) => {
        if(val === 'Dropdown')
        {
            this.setState({toggleRadioDropdown: true});
        }else{
            this.setState({toggleRadioDropdown: false,showNumberofTransport: false});
        }

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

                            <ExampleRadioUsage toggleRadioButton ={this.toggleRadioButton}/>

                        { this.state.toggleRadioDropdown ? <ShowNumberofTransportDropdown numberofTransportDropdown ={this.numberofTransportDropdown} />
                            : <ShowNumberofTransportSlider numberofTransportSlider ={this.numberofTransportSlider}/> }

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

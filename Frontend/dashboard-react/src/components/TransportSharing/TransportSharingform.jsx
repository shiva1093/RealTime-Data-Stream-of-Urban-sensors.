import React from "react";
import PropTypes from "prop-types";
// creates a beautiful scrollbar
import "perfect-scrollbar/css/perfect-scrollbar.css";
import AddAlert from "@material-ui/icons/AddAlert";
import {withStyles} from "material-ui";
import {Grid,FormControl} from "material-ui";
import TextField from 'material-ui/TextField';
//core components
import Snackbar from "../../components/baseLayout/Snackbar/Snackbar.jsx";
import {
    ShowNumberofTransport,ShowNumberofTransportDropdown,ShowNumberofProviderDropdown,ShowNumberofTransportSlider
} from "../transpotation/transportComponents/numberOfTransportComponent"
import ExampleRadioUsage from "../transpotation/transportComponents/checkboxTransportComponent"
import Maps from "../../views/Maps/Maps.jsx";
import {
    Button
} from "../../components/baseItems";

import appStyle from "../../assets/jss/material-dashboard-react/appStyle.jsx";
//import NestedCheckbox from "./transportComponents/NestedCheckbox";


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
            transportProviderName: '',
            transportName: [],
            showNumberofTransport: false,
            toggleRadioDropdown: true,
            numberofTransportSlider: [],
            open: false,
            place: 'bc',
            radius:'',
            boundaryPoints: {}
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

    numberofTransport = (val) => {
        this.setState({numberOfTransport: val,numberofTransportSlider: []});
    }

    numberofTransportDropdown = (val) => {
        this.setState({transportValue: val,numberofTransportSlider: []});
        if(val)
        {
            this.setState({showNumberofTransport: true});

        }
    }

    numberofTransportSlider = (val) => {
        this.setState({numberofTransportSlider: val,numberOfTransport: '',transportValue: ''});
    }

    toggleRadioButton = (val) => {
        if(val === 'Dropdown')
        {
            this.setState({toggleRadioDropdown: true});
        }else{
            this.setState({toggleRadioDropdown: false,showNumberofTransport: false});
        }

    }

    /* Retrieve values from Maps.jsx */
    maps = (googleMap) => {
        var pos = JSON.stringify(googleMap.getCenter());
        pos = JSON.parse(pos)
     //alert('LatLngBounds of this Circle:' + googleMap.getBounds())
        this.setState({radius: googleMap.getRadius(), boundaryPoints: {
                latitudeX: pos.lat,
                longitudeY: pos.lng
        }});
    }

    transportProviderName = (val) => {
        this.setState({transportProviderName: val});
    }

    handleSubmit = e => {
        this.showNotification();
        e.preventDefault();
        //redirect to new page
        this.props.onSubmitValues(this.state,this.props.transportName)
    }

    validateForm() {
       // return this.state.transportName.length > 0 && this.state.numberOfTransport.length > 0;
        return true;
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
                                value={this.props.transportName}
                                margin="normal"
                                className={classes.textField}
                                name="transportName"
                                disabled
                            />
                        </FormControl>

                        <ShowNumberofProviderDropdown providerType = {this.props.transportName} componentTitle={"Select the Provider"} numberofTransportDropdown ={this.transportProviderName} />
                        <ExampleRadioUsage toggleRadioButton ={this.toggleRadioButton}/>

                        { this.state.toggleRadioDropdown ? <ShowNumberofTransportDropdown componentTitle={"Amount of "+this.props.transportName}numberofTransportDropdown ={this.numberofTransportDropdown} />
                            : <ShowNumberofTransportSlider numberofTransportSlider ={this.numberofTransportSlider}/> }

                        { this.state.showNumberofTransport ? <ShowNumberofTransport
                            transportLabel = {"Number of cars/bikes"} numberofTransport ={this.numberofTransport}/>  : null }
                        <FormControl className={classes.formControl} style={mapsControlStyles}>
                            <Maps maps={this.maps} mapOptions='circle'/>
                        </FormControl>
                        <Button label="Submit" disabled={!this.validateForm()} color="warning"
                                type="submit">Create</Button>
                        <Snackbar
                            place={this.state.place}
                            color={'warning'}
                            icon={AddAlert}
                            message="New Condition Successfully Added"
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

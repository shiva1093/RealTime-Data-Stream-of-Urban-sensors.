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
import  {ShowNumberofTransport,ShowNumberofTransportDropdown,ShowNumberofTransportSlider} from "./transportComponents/numberOfTransportComponent"
import Maps from "../../views/Maps/Maps.jsx";
import ExampleRadioUsage from "./transportComponents/checkboxTransportComponent"
import {
    Button
} from "../../components/baseItems";

import appStyle from "../../assets/jss/material-dashboard-react/appStyle.jsx";
import NestedCheckbox from "./transportComponents/NestedCheckbox";


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
            busName: [],
            transportValue: '',
            open: false,
            place: 'bc',
            showNumberofTransport: false,
            toggleRadioDropdown: true,
            numberofTransportSlider: [],
            radius:'',
            boundaryPoints: []
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
        //alert('Radius:' + googleMap.getRadius())
       // alert('LatLngBounds of this Circle:' + googleMap.getBounds())
        this.setState({radius: googleMap.getRadius(), boundaryPoints:googleMap.getCenter() });
       // alert('Center of this circle:' + googleMap.getCenter())
    }

    numberofTransport = (val) => {
        console.log('numberofTransport:' + val)
        this.setState({numberOfTransport: val});
    }


    busDirection = (busDirection) => {
        console.log(busDirection)
        this.setState({busName: busDirection});
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
        this.setState({numberofTransportSlider: val});
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
      /*  console.log('TransportType: ' + this.state.transportName);
        console.log('points'+ this.state.busName);
        console.log('numberOfTransport: ' + this.state.numberOfTransport);
        console.log('Transport Value' + this.state.transportValue );
        console.log('Slider Value' + this.state.numberofTransportSlider );
        console.log('radius'+ this.state.radius);
        console.log('points'+ this.state.boundaryPoints);*/
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

                        <FormControl className={classes.formControl} style={mapsControlStyles}>
                            <NestedCheckbox busDirection = {this.busDirection}/>
                        </FormControl>

                            <ExampleRadioUsage toggleRadioButton ={this.toggleRadioButton}/>

                        { this.state.toggleRadioDropdown ? <ShowNumberofTransportDropdown numberofTransportDropdown ={this.numberofTransportDropdown} />
                            : <ShowNumberofTransportSlider numberofTransportSlider ={this.numberofTransportSlider}/> }

                        { this.state.showNumberofTransport ? <ShowNumberofTransport
                            numberofTransport ={this.numberofTransport}/>  : null }

                        <FormControl className={classes.formControl} style={mapsControlStyles}>
                            <Maps maps={this.maps} mapOptions='circle'/>
                        </FormControl>
                        <Button label="Submit" disabled={!this.validateForm()} color="info"
                                type="submit">Create</Button>
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

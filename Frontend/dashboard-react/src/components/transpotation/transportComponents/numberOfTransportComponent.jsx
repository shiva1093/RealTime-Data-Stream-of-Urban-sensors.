import React from "react";
import {withStyles} from "material-ui";
import { FormControl} from "material-ui";
import TextField from 'material-ui/TextField';
import appStyle from "../../../assets/jss/material-dashboard-react/appStyle.jsx";
const formControlStyles = {
    width: 600,
};


function ShowNumberofTransport (props) {
    return (<FormControl className={props.formControl} style={formControlStyles}>
        <TextField
            required
            id="numberOfTransport-input"
            label="Number of trains/buses/trams"
            className={props.textField}
            type="text"
            name="numberOfTransport"
            margin="normal"
            onChange={(e) => {
                props.numberofTransport(e.target.value) // Call to your function to retrieve values
            }}
        />
    </FormControl>);
}

export default  withStyles(appStyle)(ShowNumberofTransport);
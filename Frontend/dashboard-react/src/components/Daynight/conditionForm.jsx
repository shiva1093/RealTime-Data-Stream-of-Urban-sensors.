import React from "react";
import PropTypes from 'prop-types';
import { withStyles} from "material-ui";
import {Select, MenuItem, Input, InputLabel, FormControl} from 'material-ui';
import Snackbar from "../../components/baseLayout/Snackbar/Snackbar.jsx";
import AddAlert from "@material-ui/icons/AddAlert";

import {
  Button
} from "../../components/baseItems";

import Maps from "../../views/Maps/Maps.jsx";

import daynightStyle from './style';

import {sendmsg} from '../../utils/webstomp.js';
import uuidv1 from 'uuid/v1';

const mapsControlStyles = {
  width: 1040,
  paddingTop: 20
};
const catagory = ["Day", "Night"]

class ConditionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catagory:catagory[0],
            postion: {
              lat: '52.52',
              lon: '13.41'
            },
            open: false,
            place: 'bc',
            color: 'rose'
        }
        this.handleCatagoryChange = this.handleCatagoryChange.bind(this);
        this.markermaps = this.markermaps.bind(this);
        this.sendMsg = this.sendMsg.bind(this);
    }

    sendMsg(e) {
        e.preventDefault();
        console.log('sending message!!!');
        var conditionValue;
        conditionValue = "Is" + " " + this.state.catagory
        
        var uid = uuidv1();
        var msg = {
          bindingID: uid,
          setting:"",
          condition: [{
            lon: this.state.position.lon,
            lat: this.state.position.lat,
            value: conditionValue,
          }],
          command: 'CREATE'
        }
        console.log("send messge:::::" + JSON.stringify(msg));
        sendmsg(msg);
    }

    handleCatagoryChange = (event) => {
        var value = event.target.value
        this.setState({
          catagory: value,
        });
    }

    markermaps = (googleMap) => {
      var pos = JSON.stringify(googleMap.getPosition());
      pos = JSON.parse(pos);
      this.setState({position: {
        lat: pos.lat,
        lon: pos.lng 
      }});
    }

    render() {
        const {classes} = this.props;
        return(
          <form className={classes.root} autoComplete="off" onSubmit={this.sendMsg}>
            <FormControl sytle={daynightStyle} className={classes.formControl}>
            <InputLabel htmlFor="catagory" color='black' className={classes.inputLabel} >Day/Night</InputLabel>
            <Select className={classes.select}
                value={this.state.catagory}
                onChange={this.handleCatagoryChange}
                input={<Input name="catagory" id="catagory" />}
          >
            {catagory.map(item => {
              return(
                <MenuItem key={item} value={item}>{item}</MenuItem>
              )
            })}
            </Select>
          </FormControl>
        <FormControl style={mapsControlStyles} >
            <Maps markermaps={this.markermaps} mapOptions='marker'/>
        </FormControl>
        <Button label="Submit"  color="primary" type="submit">Create</Button>
        <Snackbar
          place={this.state.place}
          color= "primary"
          icon={AddAlert}
          message="New Rule Successfully Added"
          open={this.state.open}
          closeNotification={() => this.setState({open:false})}
          close
        />
        </form>
        )
    }

}
ConditionForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(daynightStyle)(ConditionForm);
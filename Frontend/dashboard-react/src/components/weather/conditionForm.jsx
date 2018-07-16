import React from "react";
import PropTypes from 'prop-types';
import { withStyles} from "material-ui";
import TextField from 'material-ui/TextField';
import {Select, MenuItem, Input, InputLabel, FormControl} from 'material-ui';
import Snackbar from "../../components/baseLayout/Snackbar/Snackbar.jsx";
import AddAlert from "@material-ui/icons/AddAlert";

import {
  Button
} from "../../components/baseItems";

import Maps from "../../views/Maps/Maps.jsx";

import weatherStyle from './style';
import {sendmsg} from '../../utils/webstomp.js';
import uuidv1 from 'uuid/v1';

import { conditions } from './conditionInfo.js'
var catagory = conditions.catagory;
var catavalue = conditions.catavalue;
var condition = conditions.condition;

const mapsControlStyles = {
  width: 1040,
  paddingTop: 20
};

class ConditionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catagory:catagory[0],
            cata: catavalue[catagory[0]],
            value: catavalue[catagory[0]][0],
            inputValue: 'CustomerInput',
            condition: condition[0],
            postion: {
              lat: '52.52',
              lon: '13.41'
            },
            open: false,
            place: 'bc',
            color: 'green'
        }
        this.handleCatagoryChange = this.handleCatagoryChange.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.markermaps = this.markermaps.bind(this);
        this.sendMsg = this.sendMsg.bind(this);
    }

    sendMsg(e) {
        e.preventDefault();
        console.log('sending message!!!');

        var conditionCata, conditionValue, value;
        const topic = 'contextfencing.sensor.weather';
        if(conditions.isCondition.includes(this.state.catagory)) {
          conditionValue = conditions.catavalue[this.state.catagory]
        }

        if(this.state.catagory === 'Temperature'){
          conditionCata = "main.temp";
        } else if(this.state.catagory === 'Wind.speed'){
          conditionCata = "wind.speed"
        } else {
          conditionCata = "main." + (this.state.catagory).toLowerCase() 
        }
        if(this.state.value === 'CustomerInput') {
          value = this.state.inputValue
        } else {
          value = this.state.value
        }
        
        var uid = uuidv1();
        var msg = {
          bindingID: uid,
          setting:"",
          condition: [{
            lon: this.state.position.lon,
            lat: this.state.position.lat,
            value: conditionValue ? conditionValue : (conditionCata + " " + this.state.condition + " " + value )
          }],
          command: 'CREATE'
        }
        console.log("send messge:::::" + JSON.stringify(msg));
        sendmsg(msg, topic);
        this.setState({open: true})
    }

    handleCatagoryChange = (event) => {
        var value = event.target.value
        this.setState({
          catagory: value,
          cata: catavalue[value],
          value: catavalue[value][0],
        });
        if(conditions.isCondition.find(item => {
            return item === value;
        })){  
          this.setState({
            catagory: value,
            cata: catavalue[value],
            value: "No Value", 
            condition: 'is'})
        } else {
          this.setState({
            catagory: value,
            cata: catavalue[value],
            value: catavalue[value][0],
            condition: '>='
          });
        }
    }
    
    onValueChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleInput = inputValue => (event) => {
      this.setState({
        [inputValue]: event.target.value
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
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="catagory" className={classes.inputLabel} >Catagory</InputLabel>
            <Select className={classes.select}
                value={this.state.catagory}
                onChange={this.handleCatagoryChange}
                input={<Input name="catagory" id="catagory" />}
          >
            {conditions.catagory.map(item => {
              return(
                <MenuItem key={item} value={item}>{item}</MenuItem>
              )
            })}
            </Select>
          </FormControl>

          {conditions.isCondition.includes(this.state.catagory) ?
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="condition" className={classes.inputLabel} >Condition</InputLabel>
            <Select className={classes.select}
              value={this.state.condition}
              onChange={this.onValueChange}
              input={<Input name="condition" id="condition" />}
            >
            <MenuItem key={'is'} value={'is'}> is </MenuItem>
            </Select>
           </FormControl>
         :
           <FormControl className={classes.formControl}>
             <InputLabel htmlFor="condition" className={classes.inputLabel} >Condition</InputLabel>
             <Select className={classes.select}
               value={this.state.condition}
               onChange={this.onValueChange}
               input={<Input name="condition" id="condition" />}
             >
               {
                 conditions.condition.map(item => {
                   return (
                     <MenuItem key={item} value={item}>{item}</MenuItem>
                   )
                 })
               }
             </Select>
           </FormControl>
        }
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="value" className={classes.inputLabel}>Value</InputLabel>
          <Select className={classes.select}
            value={this.state.value}
            onChange={this.onValueChange}
            input={<Input name="value" id="value" />}
          >
          {
            this.state.cata.map(item=>{
              return(
                <MenuItem key={item} value={item}>{item}</MenuItem>
              )
            })
          }
          </Select>
        </FormControl>
        {this.state.value === "CustomerInput" ?
        <FormControl className={classes.formControl}>
          <TextField
            id="inputValue"
            label="inputValue"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="CustomerInput"
            onChange={this.handleInput('inputValue')}
          />
        </FormControl> : null }
        <FormControl style={mapsControlStyles} >
            <Maps markermaps={this.markermaps} mapOptions='marker'/>
        </FormControl>
        <Button label="Submit"  color="success" type="submit">Create</Button>
        <Snackbar
          place={this.state.place}
          color= "success"
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
export default withStyles(weatherStyle)(ConditionForm);
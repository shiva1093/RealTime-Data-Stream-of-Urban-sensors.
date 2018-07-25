import React from "react";
import TextField from 'material-ui/TextField';
import { InputLabel, Input, FormControl, MenuItem} from "material-ui";
import Select from '@material-ui/core/Select';
import { Slider } from 'antd';
import {providerconditions} from "../../TransportSharing/providerconditions";
const formControlStyles = {
    width: 600,
};




export class ShowNumberofTransportSlider extends React.Component {


    onChange = (e) => {
        this.setState({
            rangeValue: e,
        })
        this.props.numberofTransportSlider(this.state.rangeValue)
    }

    state = {
        rangeValue: [1,5],
    };
    render(){
        return (
            <FormControl style={formControlStyles}>
                <InputLabel htmlFor="age-helper">Use the Slider to select the value</InputLabel>
            <Slider onChange={e => this.onChange(e)} range value={this.state.rangeValue} />
            </FormControl>
        )}
}

export class ShowNumberofTransportDropdown extends React.Component {
    state = {
        dropdownValue: '',
    };
    render(){
        return (<FormControl style={formControlStyles}>
            <InputLabel htmlFor="age-helper">{this.props.componentTitle}</InputLabel>
            <Select
                name="transportValue"
                value={this.state.dropdownValue}
                onChange={e => {
                    this.props.numberofTransportDropdown(e.target.value)
                    this.setState({
                        dropdownValue: e.target.value,
                    })
                }}
                input={<Input name="transportValue" id="age-helper"/>}
            >
                <MenuItem value={'<='}>{'<='}</MenuItem>
                <MenuItem value={'>='}>{'>='}</MenuItem>
                <MenuItem value={'=='}>{'=='}</MenuItem>
            </Select>
            {/*<FormHelperText>Some important helper text</FormHelperText>*/}
        </FormControl>);
    }

}

export class ShowNumberofProviderDropdown extends React.Component {
    state = {
        dropdownValue: '',
    };
    render(){
        return (<FormControl style={formControlStyles}>
            <InputLabel htmlFor="age-helper">{this.props.componentTitle}</InputLabel>
            <Select
                name="transportValue"
                value={this.state.dropdownValue}
                onChange={e => {
                    this.props.numberofTransportDropdown(e.target.value)
                    this.setState({
                        dropdownValue: e.target.value,
                    })
                }}
                input={<Input name="transportValue" id="age-helper"/>}
            >
                {

                    this.props.providerType == 'Cars'? providerconditions.cars.map(item => {
                        return (
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        )
                    }): providerconditions.bikes.map(item => {
                        return (
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        )
                    })
                }
            </Select>
            {/*<FormHelperText>Some important helper text</FormHelperText>*/}
        </FormControl>);
    }

}

export function ShowNumberofTransport (props) {
    return (<FormControl className={props.formControl} style={formControlStyles}>
        <TextField
            required
            id="numberOfTransport-input"
            label={props.transportLabel}
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

/*
export function ShowNumberofTransportDropdown1 (props) {
    return (<FormControl className={props.formControl} style={formControlStyles}>
        <InputLabel htmlFor="age-helper">Amount of Trains/Buses/Trams</InputLabel>
        <Select
            name="transportValue"
            value={'<'}
            onChange={e => {
                props.numberofTransportDropdown(e.target.value)
            }}
            input={<Input name="transportValue" id="age-helper"/>}
        >
            <MenuItem value={'<='}>{'<='}</MenuItem>
            <MenuItem value={'>='}>{'>='}</MenuItem>
            <MenuItem value={'=='}>{'=='}</MenuItem>
        </Select>
        {/!*<FormHelperText>Some important helper text</FormHelperText>*!/}
    </FormControl>);
}
*/

//export default  withStyles(appStyle)(ShowNumberofTransport,ShowNumberofTransportDropdown);
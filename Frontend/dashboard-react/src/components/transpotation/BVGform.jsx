import React from "react";
import PropTypes from "prop-types";
// creates a beautiful scrollbar
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { withStyles, Checkbox } from "material-ui";
import { Grid, InputLabel, Input,FormControl,MenuItem,FormHelperText,ListItemText } from "material-ui";
import Select from '@material-ui/core/Select';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui-time-picker';
import {
    ProfileCard,
    RegularCard,
    Button,
    CustomInput,
    ItemGrid,

} from "../../components/baseItems";

import appStyle from "../../assets/jss/material-dashboard-react/appStyle.jsx";


const formControlStyles = {
    width:600

};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const busNames = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

class BVGform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checkAll: false,numberOfTransport: '',transportType: [],  transportName: 'BUS', transportValue: '', timeOfTransport: ''};
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleCheck = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if(value)
        {
            this.checkAll();
        }else{
            this.setState(({ transportType }) => (
                {
                    transportType: [],
                }
            ));
        }
        this.setState(({ checkAll }) => (
            {
                checkAll: value,
            }
        ));
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

   handleChangeTimePicker = (time) => {
        console.log(time)
        this.setState({timeOfTransport: time});
    };

    checkAll() {
        let transportType = this.state.transportType
        busNames.forEach((email) => {
            this.state.transportType.push(email)
        })
        this.setState({transportType})
    }
    validateDropdown() {
        return this.state.transportValue.length >0;
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid item xs={18} sm={12} md={8}>
                 <div className={classes.container}>
                        <form onSubmit={this.handleSubmit}>
                            <FormControl className={classes.formControl}  style = {formControlStyles}>
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
                            <FormControl className={classes.formControl} style = {formControlStyles}>
                                    <InputLabel htmlFor="age-helper">Type of Transport</InputLabel>
                                    <Select
                                        multiple
                                        name="transportType"
                                        onChange={e=>this.handleChange(e)}
                                        value={this.state.transportType}
                                        input={<Input id="select-multiple-checkbox" />}
                                        renderValue={selected => selected.join(', ')}
                                        MenuProps={MenuProps}
                                    >
                                        <MenuItem key={'All'} value={'All'}>
                                            <Checkbox color='primary'
                                                      checked={this.state.checkAll} name={'test'} onChange={e=>this.handleCheck(e)} />
                                            <ListItemText primary={'ALL'} />
                                        </MenuItem>
                                        {busNames.map(name => (
                                            <MenuItem key={name} value={name}>
                                                <Checkbox color='primary' checked={this.state.transportType.indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {/*<FormHelperText>Some important helper text</FormHelperText>*/}
                            </FormControl>
                            <FormControl className={classes.formControl} style = {formControlStyles}>
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
                            <FormControl className={classes.formControl} style = {formControlStyles}>
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
                            <FormControl className={classes.formControl} style = {formControlStyles}>
                                <TimePicker
                                    mode='24h'
                                    name="timeOfTransport"
                                    value={this.state.timeOfTransport}
                                    onChange={e=>this.handleChangeTimePicker(e)}
                                />
                                {<FormHelperText>Specify the Time</FormHelperText>}
                            </FormControl>
                            <Button label="Submit"  disabled={!this.validateForm()} color='primary' type="submit">Login</Button>
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

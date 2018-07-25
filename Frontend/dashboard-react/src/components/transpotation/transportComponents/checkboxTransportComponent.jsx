import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Radio from "@material-ui/core/Radio";
// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import checkboxAdnRadioStyle from "../../../assets/jss/material-dashboard-react/checkBoxandRadioStyle";
import FormControlLabel from '@material-ui/core/FormControlLabel';
//core components
class ExampleRadioUsage extends React.Component{
    state = {
        selectedValue: 'Dropdown',
    };

    onRadioChange = (e) =>  {
        this.setState({
            selectedValue: e,
        })

        this.props.toggleRadioButton(e);
    };
    render(){
        const { classes } = this.props;
        return (
            <div>
                <FormControlLabel value="1" control={<Radio
                    checked={this.state.selectedValue === 'Dropdown'}
                    onChange={(e) => this.onRadioChange('Dropdown')}
                    value="Dropdown"
                    name="radio button demo"
                    aria-label="A"
                    icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                    checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                    classes={{
                        checked: classes.radio,
                    }}
                />} label="Dropdown" />

                <FormControlLabel value="2" control={ <Radio
                    checked={this.state.selectedValue === 'Range'}
                    onChange={(e) => this.onRadioChange('Range')}
                    value="Range"
                    name="radio button demo"
                    aria-label="B"
                    icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                    checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                    classes={{
                        checked: classes.radio
                    }}
                />} label="Range" />
            </div>
        );
    }
}

ExampleRadioUsage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(checkboxAdnRadioStyle)(ExampleRadioUsage);
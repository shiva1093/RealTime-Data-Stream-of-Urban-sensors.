import React from "react";
import PropTypes from "prop-types";
import TransportSharingform from "./TransportSharingform.jsx";
import {Tabs,Tab,Typography,AppBar } from "material-ui";
import BikeIcon from '@material-ui/icons/DirectionsBike';
import CarIcon from '@material-ui/icons/DirectionsCar';
import {
    RegularCard,
} from "../../components/baseItems";
import {connect, sendmsg} from '../../utils/webstomp.js';
import uuidv1 from 'uuid/v1';

import { withStyles } from "material-ui";
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}
const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

const formControlStyles = {
    width:600

};

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
class TransportSharing extends React.Component {

    state = {
        value: 0,
        formValues:{}
    };
    componentWillMount(){
        connect();
    }
    onSubmitValues = (formValues,transportName) => {
        var uid = uuidv1();
        var topicName = '/topic/transportSharing';

        this.setState({ formValues:{
                "bindingID": uid,
                "settings": "",
                "condition":[{ "radius": formValues.radius,
                    "latitudeX": formValues.boundaryPoints.latitudeX,
                    "longitudeY" : formValues.boundaryPoints.longitudeY,
                    "transportType" : transportName,
                    "providerName" :formValues.transportProviderName,
                    "transportAmountLowerBound" :formValues.transportValue =='<='?'0':(formValues.transportValue =='=='? formValues.numberOfTransport : (formValues.transportValue == '>='? formValues.numberOfTransport : formValues.numberofTransportSlider[0])),
                    "transportAmountUpperBound" :formValues.transportValue =='>='?'0':(formValues.transportValue =='=='? formValues.numberOfTransport : ( formValues.transportValue == '<='? formValues.numberOfTransport : formValues.numberofTransportSlider[1])),
                }],
                "command": "CREATE"
            } });

        const jsonArray ={
            "bindingID": uid,
            "settings": "",
            "condition":[{
                "radius": formValues.radius,
                "latitudeX": formValues.boundaryPoints.latitudeX,
                "longitudeY" : formValues.boundaryPoints.longitudeY,
                "transportType" : transportName,
                "providerName" :formValues.transportProviderName,
                "transportAmountLowerBound" :formValues.transportValue =='<='?'0':(formValues.transportValue =='=='? formValues.numberOfTransport : (formValues.transportValue == '>='? formValues.numberOfTransport : formValues.numberofTransportSlider[0])),
                "transportAmountUpperBound" :formValues.transportValue =='>='?'0':(formValues.transportValue =='=='? formValues.numberOfTransport : ( formValues.transportValue == '<='? formValues.numberOfTransport : formValues.numberofTransportSlider[1])),
            }],
            "command": "CREATE"
        }
        sendmsg(jsonArray,topicName);
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <RegularCard  cardTitle= 'Configure Rules for Public Transport' headerColor='orange' style={formControlStyles}
                          content={ <div>
                <AppBar position="static" color="#fff">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        scrollable
                        scrollButtons="on"
                        indicatorColor="#ff9800"
                        textColor="#000"
                    >
                        <Tab label="Car" icon={<CarIcon />} />
                        <Tab label="Bikes" icon={<BikeIcon />} />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><TransportSharingform transportName={"Cars"} onSubmitValues = {this.onSubmitValues}/>
                    {JSON.stringify(this.state.formValues,null,2)}
                </TabContainer>}
                {value === 1 && <TabContainer><TransportSharingform transportName={"Bikes"} onSubmitValues = {this.onSubmitValues}/>
                    {JSON.stringify(this.state.formValues,null,2)}</TabContainer>}
            </div>}/>
        );

    }
}

TransportSharing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TransportSharing);

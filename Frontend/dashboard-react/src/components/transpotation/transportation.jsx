import React from "react";
import PropTypes from "prop-types";
import BVGform from "./BVGform.jsx";
import {Tabs,Tab,Typography,AppBar } from "material-ui";
import TrainIcon from '@material-ui/icons/Train';
import TramIcon from '@material-ui/icons/Tram';
import BusIcon from '@material-ui/icons/DirectionsBus';
import SubwayIcon from '@material-ui/icons/Subway';
import {
    RegularCard,
} from "../../components/baseItems";
import {connect, sendmsg} from '../../utils/webstomp.js';
import uuidv1 from 'uuid/v1';

import { withStyles } from "material-ui";
import config from '../../config/default.js'

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
class Transportation extends React.Component {

    state = {
        value: 0,
        formValues:{}
    };
    componentWillMount(){
        connect();
    }
    onSubmitValues = (formValues,transportName) => {
        const jsonValues = [transportName,formValues.busName,
            formValues.transportValue,formValues.numberOfTransport,formValues.radius,formValues.boundaryPoints]
        var uid = uuidv1();
        var topicName = config.topics.transport;

        this.setState({ formValues:{
                "bindingID": uid,
                "settings": "",
                "condition":[{ "radius": formValues.radius,
                    "latitudeX": formValues.boundaryPoints.latitudeX,
                    "longitudeY" : formValues.boundaryPoints.longitudeY,
                    "transportType" : transportName,
                    "transport" : formValues.busName,
                    "direction" : formValues.transportDirection,
                    "transportAmountLowerBound" :formValues.transportValue =='<='?'0':(formValues.transportValue =='=='? formValues.numberOfTransport : (formValues.transportValue == '>='? formValues.numberOfTransport : formValues.numberofTransportSlider[0])),
                    "transportAmountUpperBound" :formValues.transportValue =='>='?'0':(formValues.transportValue =='=='? formValues.numberOfTransport : ( formValues.transportValue == '<='? formValues.numberOfTransport : formValues.numberofTransportSlider[1])),
                }],
                "command": "CREATE"
            } });

        const jsonArray ={
            "bindingID": uid,
            "settings": "",
            "condition":[{ "radius": formValues.radius,
                "latitudeX": formValues.boundaryPoints.latitudeX,
                "longitudeY" : formValues.boundaryPoints.longitudeY,
                "transportType" : transportName,
                "transport" :formValues.busName,
                "transportAmountLowerBound" :formValues.transportValue =='<='?'0':(formValues.transportValue =='=='? formValues.numberOfTransport : (formValues.transportValue == '>='? formValues.numberOfTransport : formValues.numberofTransportSlider[0])),
                "transportAmountUpperBound" :formValues.transportValue =='>='?'0':(formValues.transportValue =='=='? formValues.numberOfTransport : ( formValues.transportValue == '<='? formValues.numberOfTransport : formValues.numberofTransportSlider[1])),
            }],
            "command": "CREATE"
        }
        console.log(formValues.busName)
        sendmsg(jsonArray,topicName);
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <RegularCard  cardTitle= 'Configure Rules for Public Transport' headerColor='blue' style={formControlStyles}
                          content={ <div>
                <AppBar position="static" color="#fff">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        scrollable
                        scrollButtons="on"
                        indicatorColor="#00acc1"
                        textColor="#000"
                    >
                        <Tab label="Bus" icon={<BusIcon />} />
                        <Tab label="Train" icon={<TrainIcon />} />
                        <Tab label="Tram" icon={<TramIcon />} />
                        <Tab label="Subway" icon={<SubwayIcon />} />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><BVGform transportName={"bus"} onSubmitValues = {this.onSubmitValues}/>
                    {JSON.stringify(this.state.formValues,null,2)}
                </TabContainer>}
                {value === 1 && <TabContainer><BVGform transportName={"train"} onSubmitValues = {this.onSubmitValues}/>
                    {JSON.stringify(this.state.formValues,null,2)}</TabContainer>}
                {value === 2 && <TabContainer><BVGform transportName={"tram"} onSubmitValues = {this.onSubmitValues}/>
                    {JSON.stringify(this.state.formValues,null,2)}</TabContainer>}
                {value === 3 && <TabContainer><BVGform transportName={"ubahn"} onSubmitValues = {this.onSubmitValues}/>
                    {JSON.stringify(this.state.formValues,null,2)}</TabContainer>}
            </div>}/>
        );

    }
}

Transportation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Transportation);

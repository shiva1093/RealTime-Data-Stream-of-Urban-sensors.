import React from "react";
import PropTypes from "prop-types";
import BVGform from "./BVGform.jsx";
import { Paper,Tabs,Tab,Typography,AppBar } from "material-ui";
import TrainIcon from '@material-ui/icons/Train';
import TramIcon from '@material-ui/icons/Tram';
import BusIcon from '@material-ui/icons/DirectionsBus';
import SubwayIcon from '@material-ui/icons/Subway';
import {
    ProfileCard,
    RegularCard,
    Button,
    CustomInput,
    ItemGrid,
} from "../../components/baseItems";

// react plugin for creating charts
import {
  MoreHoriz,
  Update,
  Train
} from "@material-ui/icons";

import { withStyles, Grid } from "material-ui";
import Header from './header.jsx';

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
    };

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
                {value === 0 && <TabContainer><BVGform/></TabContainer>}
                {value === 1 && <TabContainer>Item Two</TabContainer>}
                {value === 2 && <TabContainer>Item Three</TabContainer>}
                {value === 3 && <TabContainer>Item Four</TabContainer>}
            </div>}/>
        );

    }
}

Transportation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Transportation);

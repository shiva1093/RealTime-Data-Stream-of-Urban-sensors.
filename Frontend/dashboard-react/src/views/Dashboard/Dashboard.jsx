import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import {
  Train,
  DirectionsCar,
  FilterDrama,
  WbSunny,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility
} from "@material-ui/icons";
import { withStyles, Grid } from "material-ui";
import TransportTable from "./Transport/transportTable";
import WeatherTable from "./weather/weatherTable";
import DaynightTable from "./Daynight/daynightTable"
import {connect} from '../../utils/webstomp.js';

import VehicleTable from "./VehicleSharing/vehicleTable";
import {
  StatsCard,
  RegularCard,
  Table,
  ItemGrid
} from "../../components/baseItems";


import dashboardStyle from "../../assets/jss/material-dashboard-react/dashboardStyle";
class Dashboard extends React.Component {
  state = {
    value: 0,
    transportRules:0,
    weatherRules: 0,
    vehicleRules:0,
    daynightRules:0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  transportRules = (props) =>{
      let count = props.length
      this.setState({
          transportRules:count
      })
  }

  weatherRules = (props) =>{
    let count = props.length
    this.setState({
        weatherRules:count
    })
  }

   vehicleRules = (props) =>{
        let count = props.length
        this.setState({
           vehicleRules:count
        })
    }
  daynightRules = (props) =>{
    let count = props.length
    this.setState({
        daynightRules:count
    })
  }

componentWillMount(){
  connect();
}

  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Train}
              iconColor="blue"
              title="Transport Conditions"
              description={this.state.transportRules}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={FilterDrama}
              iconColor="green"
              title="Weather Conditions"
              description={this.state.weatherRules}
            />
          </ItemGrid>

          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={DirectionsCar}
              iconColor="orange"
              title="Car/Bike Conditions"
              description={this.state.vehicleRules}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={WbSunny}
              iconColor="rose"
              title="Day/Night Conditions"
              description={this.state.daynightRules}
              />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              headerColor="blue"
              cardTitle="Getting Information For Transport "
              cardSubtitle="Displaying Transport Conditions"
              content={
                  <TransportTable transportRules={this.transportRules} transportFront="transport"/>
              }
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            headerColor="green"
            cardTitle="Getting Information For Weather"
            cardSubtitle="Displaying Weather Conditions"
              content={
                  <WeatherTable weatherRules={this.weatherRules}/>
              }
          />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            headerColor="orange"
            cardTitle="Getting Information For Transport Sharing"
            cardSubtitle="Displaying Transport Sharing Conditions"
            content={
                <VehicleTable vehicleRules={this.vehicleRules}/>
            }
          />
        </ItemGrid>
         <ItemGrid xs={12} sm={12} md={12}>
                <RegularCard
                    headerColor="rose"
                    cardTitle="Getting Information For Day / Night"
                    cardSubtitle="Displaying Day Night Conditions"
                    content={
                      <DaynightTable daynightRules={this.daynightRules}/>
                    }
                />
            </ItemGrid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);

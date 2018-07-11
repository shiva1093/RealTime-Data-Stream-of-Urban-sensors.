import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import {
  Train,
  DirectionsCar,
  FilterDrama,
  MoreHoriz,
  InfoOutline,
  Subject,
  Tram,
  Warning,
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
    vehicleRules:0
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
              statIcon={Update}
              statText="Total number of Conditions"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={FilterDrama}
              iconColor="green"
              title="Weather Rules"
              description={this.state.weatherRules}
              statIcon={Update}
              statText="Rules for Weather"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={DirectionsCar}
              iconColor="orange"
              title="Car/Bike Conditions"
              description={this.state.vehicleRules}
              statIcon={Update}
              statText="Total number of Conditions"
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
                  <WeatherTable weatherRules={this.weatherRules} transportFront="transport"/>
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
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);

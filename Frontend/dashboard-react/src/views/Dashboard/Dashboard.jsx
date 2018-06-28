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


  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Train}
              iconColor="blue"
              title="Transport Rules"
              description={this.state.transportRules}
              statIcon={Update}
              statText="Total number of rules"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={DirectionsCar}
              iconColor="green"
              title="Car/Bike Rules"
              description="30"
              statIcon={Update}
              statText="Rules for Cars / Bikes"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={FilterDrama}
              iconColor="blue"
              title="Weather Rules"
              description="75"
              statIcon={Update}
              statText="Rules for Weather"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={MoreHoriz}
              iconColor="red"
              title="Add More ..."
              description="0"
              statIcon={Update}
              statText="Just Updated"
            />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              headerColor="yellow"
              cardTitle="Getting Information For BVG"
              cardSubtitle="New Rules Executed on 16th May, 2018"
              content={
                  <TransportTable transportRules={this.transportRules} transportFront="transport"/>
              }
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            headerColor="green"
            cardTitle="Getting Information For Cars"
            cardSubtitle="New Rules Executed on 16th May, 2018"
            content={
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Type", "Location", "Numbers", "Time"]}
                tableData={[
                  ["1", "TU berlin", "Car2Go", "45", "12:00 16.05.2018"],
                  ["2", "TU berlin Telekom Innovation Lab", "Mobike", "5", "16:00 16.05.2018"],
                  ["3", "...", "...", "..."],
                ]}
              />
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            headerColor="blue"
            cardTitle="Getting Information For Weather"
            cardSubtitle="New Rules Executed on 16th May, 2018"
            content={
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Condition", "Time", "Notifiation"]}
                tableData={[
                  ["1", " > 26 degree", "12:00 16.05.2018", "Yes"],
                  ["2", " < 10 degree", "8:00 16.05.2018", "Yes"],
                  ["3", "...", "...", "..."],
                ]}
              />
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

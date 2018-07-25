import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid } from "material-ui";

import ConditionForm from "./conditionForm";

import {
  MoreHoriz,
  FilterDrama,
  Update,
} from "@material-ui/icons";

import {
  RegularCard,
  ItemGrid,
  Table
} from "../../components/baseItems";

import Header from './header';


class Weather extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            headerColor="green"
            cardTitle="Configure Conditions for Weather"
            content={
              <ConditionForm />
            }
          />
        </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

Weather.propTypes = {
  classes: PropTypes.object.isRequired
};

//export default withStyles(tableStyle)(Weather);
export default Weather;
      
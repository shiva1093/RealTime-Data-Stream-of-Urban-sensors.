import React from "react";
import PropTypes from "prop-types";
import BVGform from "./BVGform.jsx";

// react plugin for creating charts
import {
  MoreHoriz,
  Update,
  Train
} from "@material-ui/icons";

import { withStyles, Grid } from "material-ui";

import {
  StatsCard,
  RegularCard,
  Table,
  ItemGrid
} from "../../components/baseItems";

import Header from './header.jsx';

class Transportation extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    return (
        <BVGform />
    );
  }
}

Transportation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Transportation;

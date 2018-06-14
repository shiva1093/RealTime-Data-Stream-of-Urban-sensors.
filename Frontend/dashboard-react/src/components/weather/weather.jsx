import React from "react";
import PropTypes from "prop-types";
import { Paper } from "material-ui";
import { Checkbox } from "material-ui";
import { withStyles, Grid } from "material-ui";
//import { TableHead, TableRow, TableBody, TableCell } from "material-ui";

// react plugin for creating charts
import {
  MoreHoriz,
  FilterDrama,
  Update,
} from "@material-ui/icons";

import {
  StatsCard,
  RegularCard,
  ItemGrid,
  Table
} from "../../components/baseItems";

import Header from './header';
import Select from './Selective';

//import tableStyle from "../../assets/jss/material-dashboard-react/tableStyle";

class Weather extends React.Component {
  state = {
    value: 0
  };

  render() {
    const { classes } = this.props;
//    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;
    return (
      <div>
        <Header />
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            headerColor="blue"
            cardTitle="Configure Conditions for Weather"
            content={
              <Table 
              tableHeaderColor="warning"
              tableHead={["Catagory", "Condition", "value", "Location", "Submission"," "]}
              tableData={[["...", "...", "...", "..."]]}
              />

            }
          />
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
// ##############################
// // // RegularCard styles
// #############################

import {
  card,
  cardHeader,
  defaultFont,
  orangeCardHeader,
  yellowCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  roseCardHeader
} from "assets/jss/material-dashboard-react.jsx";

const regularCardStyle = {
  card,
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardHeader: {
    ...cardHeader,
    ...defaultFont
  },
  cardPlainHeader: {
    marginLeft: 0,
    marginRight: 0
  },
  orangeCardHeader,
  yellowCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  roseCardHeader,
  cardTitle: {
    color: "#FFFFFF",
    marginTop: "0",
    marginBottom: "5px",
    ...defaultFont,
    fontSize: "1.125em",
    fontWeight : "bold"
  },
  cardSubtitle: {
    ...defaultFont,
    marginBottom: "0",
    color: "rgba(255, 255, 255, 0.62)",
    margin: "0 0 10px",
    fontWeight : "bold"
  },
  cardActions: {
    padding: "14px",
    display: "block",
    height: "auto"
  }
};

export default regularCardStyle;

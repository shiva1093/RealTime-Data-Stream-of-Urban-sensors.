import {defaultFont} from '../../assets/jss/material-dashboard-react'

const weatherStyle = theme => ({
    formControl: {
      margin: theme.spacing.unit * 3,
      minWidth: 240,
    },
    inputLabel: {
      position: "relative",
      fontSize: "1.3em",
      ...defaultFont,
      color: "#ff9800",
      lineHeight: "1.5em"
    }
  });

export default weatherStyle 
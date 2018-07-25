import {defaultFont} from '../../assets/jss/material-dashboard-react'

const daynightStyle = theme => ({
    formControl: {
      margin: theme.spacing.unit * 3,
      minWidth: 240,
    },
    inputLabel: {
      position: "relative",
      fontSize: "1.3em",
      ...defaultFont,
      lineHeight: "1.5em"
    }
  });

export default daynightStyle 
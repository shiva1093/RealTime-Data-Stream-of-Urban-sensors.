import React from 'react';
import PropTypes from 'prop-types';
import { 
    withStyles,
    Input,
    InputLabel,
    MenuItem, 
    FormHelperText,
    FormControl,
    Select 
} from 'material-ui';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  });
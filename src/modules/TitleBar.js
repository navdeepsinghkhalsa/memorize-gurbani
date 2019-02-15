import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    'font-weight': 100,
    'text-align': 'center',
  },
};

const TitleBar = ({
  classes,
  text,
}) => (
  <Typography variant="h3" className={classes.root}>{text}</Typography>
);
TitleBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(TitleBar);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
  },
  colorPrimary: {
    backgroundColor: '#FC2C04',
  },
  barColorPrimary: {
    backgroundColor: '#eda384',
  },
};

const LinearIndeterminate = ({ classes }) => {
  return (
    <div className={classes.root}>
      <LinearProgress
        classes={{ colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary }}
      />
    </div>
  );
}

LinearIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearIndeterminate);
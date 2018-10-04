import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    alignItems: "center!important",
    display: "flex!important",
    justifyContent: "center!important",
  },
  footerContainer:{
    padding: "3rem 0 1rem 0",
    fontWeight: 600
  }
});

const Footer = ({ classes }) => {

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Grid container className={classes.footerContainer}>

            <Grid item xs={12} sm={12} className={classes.bottomGrid}>
              <a target="_blank" href="https://github.com/april9288/" sytle={{textDecoration: "none"}}><i className="fab fa-github-square footerIcons"></i></a>
              <a target="_blank" href="https://www.linkedin.com/in/jongho-kim-b05618170/" sytle={{textDecoration: "none"}}><i className="fab fa-linkedin footerIcons"></i></a>
            </Grid>

            <Divider />

            <Grid item xs={12} sm={12} className={classes.bottomGrid}>
              <p className={classes.title}>
                Made with Love By James Jongho Kim
              </p>
            </Grid>

        </Grid>
      </AppBar>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);



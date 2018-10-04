import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    margin: "2rem auto",
    background: "#8A2387",  /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #F27121, #E94057, #8A2387)",  /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #F27121, #E94057, #8A2387)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 },
  title: {
    color: "white",
    margin: 30,
    fontSize: 30,
    fontWeight: 600,
    letterSpacing: "0.2rem"
  },
};

const Wrong = ({ classes }) => {
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>
            Wrong Address
          </Typography>
        </CardContent>
      </Card>
    );
}

Wrong.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Wrong);
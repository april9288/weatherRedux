import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DgreeIcon from '@material-ui/icons/TripOrigin';
import Divider from '@material-ui/core/Divider';
import WindIcon from '@material-ui/icons/Flag';
import HumidityIcon from '@material-ui/icons/Opacity';

import ReactAnimatedWeather from 'react-animated-weather';


const new_icon = (input) => {
  let new_icon = "";
  if (input.includes("-")) {
    new_icon = input.toUpperCase();
    new_icon = new_icon.replace(/-/g, "_");
    return new_icon;
  } else {
    new_icon = input.toUpperCase();
    return new_icon;
  }
}

const styles = {
  card: {
    width: "80%",
    margin: "2rem auto",
    background: "#0cebeb", /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb)",  /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  title: {
    color: "white",
    marginBottom: 16,
    fontSize: 30,
    fontWeight: 600,
    letterSpacing: "0.2rem"
  },
  subtitle:{
    color: "#808080",
    fontSize: 20,
    margin: 0,
  },
  tempGrid : {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  tempLetter : {
    color: "white",
    fontSize: "3rem",
    fontWeight: 600,
    letterSpacing: "0.2rem"
  },
  bottomGrid : {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    color:"white!important",
    fontWeight: "600!important",
  },
  icons : {
    color: "white",
    fontSize: "3rem",
  }
};

const WeatherMain = ({ classes, location, weatherData }) => {

    let timenow = moment.unix(weatherData.currently.time).format("MMM/DD");

    if (weatherData !== "error") {
      const defaults = {
        temp : weatherData.currently.temperature,
        icon: new_icon(weatherData.currently.icon),
        color: '#924da3',
        size: 150,
        animate: true
      };


    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>
            {location}
          </Typography>
          <p className={classes.subtitle}>
            {timenow}
          </p>

        <Grid container spacing={24} style={{marginTop: "2rem"}}>
            <Grid item xs={12} sm={6}>

                <ReactAnimatedWeather
                icon={defaults.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
                />

            </Grid>

            <Grid item xs={12} sm={6} className={classes.tempGrid}>

                <Typography variant="headline" className={classes.tempLetter}>
                  <i className="fas fa-thermometer-empty"></i>
                  <span style={{marginLeft: "0.5rem"}}>{weatherData.currently.apparentTemperature}</span>
                  <DgreeIcon style={{paddingBottom: "2rem"}} />
                  <br />
                  <span style={{fontSize: "1.5rem"}}>{weatherData.currently.summary}</span>
                </Typography>

            </Grid>
        </Grid>

        <Divider />

        <Grid container spacing={24} style={{marginTop: "2rem"}}>
            <Grid item xs={12} sm={6} className={classes.bottomGrid}>
              <WindIcon className={classes.icons}/>
              <span>Wind Speed</span>
              <span style={{marginLeft: "0.5rem"}}>{weatherData.currently.windSpeed}</span>
            </Grid>

            <Grid item xs={12} sm={6} className={classes.bottomGrid}>
              <HumidityIcon className={classes.icons}/>
              <span>Humidity</span>
              <span style={{marginLeft: "0.5rem"}}>{weatherData.currently.humidity}</span>
            </Grid>
        </Grid>

          
          
        </CardContent>
      </Card>
    );
  } else {return <div><p>Wrong Address</p></div>}


}

WeatherMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeatherMain);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { connect } from 'react-redux';
import { setCurrentTempAction } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    weatherData: state.requestDataReducer.weatherData.currently.apparentTemperature,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onsetCurrentTempAction: (temp) => dispatch(setCurrentTempAction(temp)),
  }
}


const styles = theme => ({
  bigIconSwitchBase: {
    '&$bigIconChecked': {
      color: theme.palette.common.white,
      '& + $bigIconBar': {
        backgroundColor: '#6a1b9a',
      },
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp,
    }),
  },
  bigIconChecked: {
    transform: 'translateX(15px)',
    '& + $bigIconBar': {
      opacity: 1,
      border: 'none',
    },
  },
  bigIconBar: {
    borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -21,
    border: 'solid 1px',
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  bigIconIcon: {
    width: 24,
    height: 24,
  },
  bigIconIconChecked: {
    boxShadow: theme.shadows[1],
  },
  label: {
    color: "white", 
    fontSize: "1rem", 
    fontWeight: 600
  }
});

class TempSwitch extends React.Component {
  state = {
    checked: false,
  }

  componentDidMount() {
    this.props.onsetCurrentTempAction(this.props.weatherData)
  }

  handleChange = inputName => event => {
    this.setState({ [inputName]: event.target.checked })
    if (event.target.checked) {
      let celcius = ((this.props.weatherData - 32) * 5/9)
      this.props.onsetCurrentTempAction(celcius.toFixed(2))
    } else {
      this.props.onsetCurrentTempAction(this.props.weatherData)
    }
  }


  render() {
    const { classes } = this.props;

    return (
        <FormControlLabel
          control={
            <Switch
              classes={{
                switchBase: classes.bigIconSwitchBase,
                bar: classes.bigIconBar,
                icon: classes.bigIconIcon,
                iconChecked: classes.bigIconIconChecked,
                checked: classes.bigIconChecked,
              }}
              disableRipple
              checked={this.state.checked}
              onChange={this.handleChange('checked')}
              value="checked"
              name="switch"
            />
          }
          label={<span className={classes.label}>celcius</span>}
        />
    );
  }
}

TempSwitch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TempSwitch));
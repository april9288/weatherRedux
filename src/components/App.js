import React, { Component } from 'react';
import Header from './Header';
import Progressbar from './Progressbar';
import Main from './Main';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { setSearchField, requestWeather } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchFieldReducer.searchField,
    weatherData: state.requestDataReducer.weatherData,
    isPending: state.requestDataReducer.isPending,
    location: state.requestDataReducer.location
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestWeather: (searchField) => dispatch(requestWeather(searchField))
  }
}

const theme = createMuiTheme({
   palette: {
    primary: {
      main: '#6a1b9a',
    },
    secondary: {
      main: '#6200ea',
    },
  },
});

class App extends Component {
  constructor() {
    super()
    this.state = {
      tempFormatinF : true,
      currentTemp : 0
    }
  }

  componentDidMount() {
    this.props.onRequestWeather(90502);
    this.setState({})
    }

  tempFormat = () => {
    this.setState({tempFormatinF : !this.state.tempFormatinF})
    let currentTemp = this.props.weatherData.currently.apparentTemperature
    if (this.state.tempFormatinF) {
      this.setState({currentTemp})
    } else {
      let currentTempInC = ((currentTemp - 32) * 5/9)
      console.log(currentTempInC)
      this.setState({currentTemp : currentTempInC})
    }
  }

  enter = (event) => {
      if (event.key === "Enter") {
        this.props.onRequestWeather(this.props.searchField);
      }
    }

  render() {
    const { onSearchChange, weatherData, isPending, location } = this.props;
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Header searchChange={onSearchChange} enter={this.enter}/>
          { isPending 
            ? <Progressbar />
            : <Main location = {location} weatherData={weatherData}/>
          }
        </MuiThemeProvider>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
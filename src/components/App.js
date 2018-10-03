import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Progressbar from './Progressbar';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { setSearchField, requestWeather } from '../actions';


const mapStateToProps = (state) => {
  return {
    searchField: state.basicReducers.searchField,
    weatherData: state.requestWeatherR.weatherData,
    isPending: state.requestWeatherR.isPending,
    location: state.requestWeatherR.location
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
  componentDidMount() {
    this.props.onRequestWeather(90502);
    }

  enter = (event) => {
      if (event.key === "Enter") {
        this.props.onRequestWeather(this.props.searchField);
      }
    }

  render() {

    const { searchField, onSearchChange, weatherData, isPending, location } = this.props;
    console.log(weatherData);

    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Header searchChange={onSearchChange} enter={this.enter}/>
          { isPending 
            ? <Progressbar />
            : <Main location = {location} data={weatherData}/>
          }
        </MuiThemeProvider>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React, { Component } from 'react';
import Header from './Header';
import Progressbar from './Progressbar';
import Main from './Main';
import './App.css';

import { connect } from 'react-redux';
import { requestWeather } from './redux/actions';

const mapStateToProps = (state) => {
  return {
    weatherData: state.requestDataReducer.weatherData,
    isPending: state.requestDataReducer.isPending,
    location: state.requestDataReducer.location
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestWeather: (searchField) => dispatch(requestWeather(searchField))
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestWeather(90502);
    }

  render() {
    const { weatherData, isPending, location } = this.props;
    return (
      <div className="App">
          <Header/>
          { isPending 
            ? <Progressbar />
            : (
              <Main location = {location} weatherData={weatherData}/>
              )
          }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
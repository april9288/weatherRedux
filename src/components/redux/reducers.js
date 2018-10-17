export const setCurrentTempReducer = (state = {currentTemp: 0}, action = {}) => {
  switch(action.type) {
    case "CURRENT_TEMP":
      return Object.assign({}, state, {currentTemp: action.payload});
    default:
      return state;
  }
}

const initialStateWeather = {
  weatherData: '',
  isPending: true,
  location: ''
}

export const requestDataReducer = (state=initialStateWeather, action={}) => {
  switch (action.type) {
    case "REQUEST_WEATHER_PENDING":
      return Object.assign({}, state, {isPending: true})
    case "REQUEST_WEATHER_SUCCESS":
      return Object.assign({}, state, {weatherData: action.payload, isPending: false})
    case "REQUEST_WEATHER_FAILED":
      return Object.assign({}, state, {weatherData: action.payload, isPending: false})
    case "REQUEST_WEATHER_LOCATION":
      return Object.assign({}, state, {location: action.location})
    default:
      return state
  }
}

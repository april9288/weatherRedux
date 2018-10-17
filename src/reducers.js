const initialState = {
	searchField: ''
}

export const searchFieldReducer = (state = initialState, action = {}) => {
	switch(action.type) {
		case "CHANGE_SEARCH_FIELD":
			return Object.assign({}, state, {searchField: action.payload});
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

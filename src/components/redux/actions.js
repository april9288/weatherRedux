// import { mockData } from './templates/sample';

export const setCurrentTempAction = (temp) => ({
    type : 'CURRENT_TEMP',
    payload: temp
})

export const requestWeather = (event) => (dispatch) => {
    dispatch({ type: "REQUEST_WEATHER_PENDING" })

    const Google_API = process.env.REACT_APP_API_KEY_GOOGLE;
    let encoded_input = encodeURIComponent(event);
    let map_address = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_input}&key=${Google_API}`;
    fetch(map_address)
        .then(response => response.json())
        .then(response => {
          if (response.status === "ZERO_RESULTS") {
            dispatch({ type: "REQUEST_WEATHER_FAILED", payload: "error" })
            //throw new Error("Unable to find that address");
          } else {
            
            let location = response.results[0].address_components[1].short_name;
            dispatch({ type: "REQUEST_WEATHER_LOCATION", location: location })

            let lat = response.results[0].geometry.location.lat;
            let lon = response.results[0].geometry.location.lng;
            const API_KEY = process.env.REACT_APP_API_KEY_DarkSky;
            let weather_API = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`;
            return fetch(weather_API);
          }
        })
        .then(response => response.json())
        .then(data => dispatch({ type: "REQUEST_WEATHER_SUCCESS", payload: data }))
        .catch(error => dispatch({ type: "REQUEST_WEATHER_FAILED", payload: "error" }))

}



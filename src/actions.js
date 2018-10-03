export const setSearchField = (text) => ({
	type : 'CHANGE_SEARCH_FIELD',
	payload: text
})

export const requestWeather = (event) => (dispatch) => {
    console.log("requested zip code : ", event);
    dispatch({ type: "REQUEST_WEATHER_PENDING" })

    const Google_API = "AIzaSyDNbz3odAS6Mfs-Wh-W9zHPUwMDpvC3exk";
    let encoded_input = encodeURIComponent(event);
    let map_address = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_input}&key=${Google_API}`;
    fetch(map_address)
        .then(response => response.json())
        .then(response => {
          if (response.status === "ZERO_RESULTS") {
            throw new Error("Unable to find that address");
          } else {
            
            let location = response.results[0].address_components[1].short_name;
            dispatch({ type: "REQUEST_WEATHER_LOCATION", location: location })

            let lat = response.results[0].geometry.location.lat;
            let lon = response.results[0].geometry.location.lng;
            const API_KEY = '5aa08ac0612a0f8f60ef7332036c2d97';
            let weather_API = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`;
            return fetch(weather_API);
          }
        })
        .then(response => response.json())
        .then(data => dispatch({ type: "REQUEST_WEATHER_SUCCESS", payload: data }))
        .catch(error => dispatch({ type: "REQUEST_WEATHER_FAILED", payload: error }))

}



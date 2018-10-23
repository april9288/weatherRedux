// import { mockData } from './templates/sample';
import axios from 'axios'

export const setCurrentTempAction = (temp) => ({
    type : 'CURRENT_TEMP',
    payload: temp
})

export const requestWeather = (event) => async (dispatch) => {
    try {
        await dispatch({ type: "REQUEST_WEATHER_PENDING" })
        const Google_API = process.env.REACT_APP_API_KEY_GOOGLE
        let EncodedInput = encodeURIComponent(event)
        let Get_Location_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${EncodedInput}&key=${Google_API}`
        const getFirstRequest = await axios.get(Get_Location_URL)
        const getFirstResponse = await getFirstRequest.data
        console.log(getFirstResponse)    
        let location = getFirstResponse.results[0].address_components[1].short_name
        await dispatch({ type: "REQUEST_WEATHER_LOCATION", location: location })
        let lat = getFirstResponse.results[0].geometry.location.lat
        let lon = getFirstResponse.results[0].geometry.location.lng
        const DarkSky_API = process.env.REACT_APP_API_KEY_DarkSky
        let GET_Data_URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${DarkSky_API}/${lat},${lon}`
        const getSecondRequest = await axios.get(GET_Data_URL)
        const getSecondResponse = await getSecondRequest.data
        await dispatch({ type: "REQUEST_WEATHER_SUCCESS", payload: getSecondResponse })
    } catch(e) {
        dispatch({ type: "REQUEST_WEATHER_FAILED", payload: "error" })
    }
}


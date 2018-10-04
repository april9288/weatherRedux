import React from 'react';
import WeatherMain from './weatherComp/WeatherMain';
import ChartMain from './weatherComp/ChartMain';
import Wrong from './weatherComp/Wrong';

const Main = ({location, weatherData}) => {
	if (weatherData !== "error") {
		return (
			<div>
			<WeatherMain location={location} weatherData={weatherData} />
			<ChartMain updates={weatherData.daily.data} />
			</div>
			);
	} else {
		return <Wrong />
	}
}
export default Main;



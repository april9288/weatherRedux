import React from 'react';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './Chart4';

const ChartMainStyle = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
}

const ChartMain = ({updates}) => {

	const highT_set = updates.map(update => update.apparentTemperatureHigh);
	const lowT_set = updates.map(update => update.apparentTemperatureLow);
	const precip_set = updates.map(update => update.precipProbability);
	const humid_set = updates.map(update => update.humidity);
	const ozone_set = updates.map(update => update.ozone);
	const uv_set = updates.map(update => update.uvIndex);
	const week_set = updates.map(update => update.time);
	const icon_set = updates.map(update => update.icon);

	const data_set = [
	      {weekday: week_set[0], 'high temp': highT_set[0], 'low temp': lowT_set[0], humid: humid_set[0], ozone: ozone_set[0], uv: uv_set[0], icon: icon_set[0], 'precip': precip_set[0]},
	      {weekday: week_set[1], 'high temp': highT_set[1], 'low temp': lowT_set[1], humid: humid_set[1], ozone: ozone_set[1], uv: uv_set[1], icon: icon_set[1], 'precip': precip_set[1]},
	      {weekday: week_set[2], 'high temp': highT_set[2], 'low temp': lowT_set[2], humid: humid_set[2], ozone: ozone_set[2], uv: uv_set[2], icon: icon_set[2], 'precip': precip_set[2]},
	      {weekday: week_set[3], 'high temp': highT_set[3], 'low temp': lowT_set[3], humid: humid_set[3], ozone: ozone_set[3], uv: uv_set[3], icon: icon_set[3], 'precip': precip_set[3]},
	      {weekday: week_set[4], 'high temp': highT_set[4], 'low temp': lowT_set[4], humid: humid_set[4], ozone: ozone_set[4], uv: uv_set[4], icon: icon_set[4], 'precip': precip_set[4]},
	];

	return(

		<div style={ChartMainStyle}>
			<Chart1 data_set = {data_set}/>
			<Chart2 data_set = {data_set}/>
			<Chart3 data_set = {data_set}/>
			<Chart4 data_set = {data_set}/>
		</div>

		);

}
export default ChartMain;



import React from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip} from 'recharts';
import moment from 'moment';

const Chart2 = ({data_set}) => {
	return (
		<ResponsiveContainer width="85%" height={250} className = "responsiveContainer">
		<BarChart data={data_set}>
		  <CartesianGrid strokeDasharray="3 3" />
		 	<XAxis dataKey='weekday' 
				  		 stroke="black"
				  	     tickFormatter={(tick) => moment(tick*1000).format('ddd')}
				  	     />
			<YAxis type="number" domain={['auto', 'auto']} stroke="black"/>
		  <Tooltip cursor={false}/>
		  <Legend verticalAlign="top" height={36}/>
		  <Bar dataKey="humid" fill="#8884d8" />
		  <Bar dataKey="precip" fill="#82ca9d" />
		</BarChart>
		</ResponsiveContainer>
		);
}
export default Chart2;



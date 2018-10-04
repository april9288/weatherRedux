import React from 'react';
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Area, AreaChart, linearGradient, stop, defs } from 'recharts';
import moment from 'moment';

const Chart1 = ({data_set}) => {
	return (
		<ResponsiveContainer width="85%" height={250} className = "responsiveContainer">
		<AreaChart data={data_set}
		  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
		  <defs>
		    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
		      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
		      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
		    </linearGradient>
		    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
		      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
		      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
		    </linearGradient>
		  </defs>
		  <XAxis dataKey='weekday' 
		  		 stroke="black"
		  	     tickFormatter={(tick) => moment(tick*1000).format('ddd')}
		  	     />
		  <YAxis type="number" domain={['auto', 'auto']} stroke="black"/>
		  <CartesianGrid strokeDasharray="3 3" />
		  <Tooltip />
		  <Legend verticalAlign="top" height={36}/>
		  <Area type="monotone" dataKey='high temp' stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
		  <Area type="monotone" dataKey='low temp' stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
		</AreaChart>
		</ResponsiveContainer>
		);
}
export default Chart1;



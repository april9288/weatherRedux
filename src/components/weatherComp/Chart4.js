import React from 'react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area } from 'recharts';
import moment from 'moment';       

const Chart4 = ({data_set}) => {
  return (
        <ResponsiveContainer width="85%" height={250}>
          <AreaChart data={data_set} syncId="anyId"
                margin={{top: 0, right: 0, left: 0, bottom: 0}}>
            <XAxis dataKey='weekday' 
                     stroke="black"
                       tickFormatter={(tick) => moment(tick*1000).format('ddd')}
                       />
            <YAxis type="number" domain={['auto', 'auto']} stroke="black"/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend verticalAlign="top" height={36}/>
            <Area type='monotone' dataKey='ozone' stroke='#82ca9d' fill='#82ca9d' />
          </AreaChart>
        </ResponsiveContainer>
    );
}
export default Chart4;




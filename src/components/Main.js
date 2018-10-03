import React from 'react';

const Main = ({location, data}) => {

		return (
			<div>
				<p>{location}</p>
				<p>{data.currently.summary}</p>
			</div>
			);

}

export default Main;

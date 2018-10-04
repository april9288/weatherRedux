import React from 'react';

const Main = ({location, data}) => {

	console.log(data);

	if (data !== "error") {
		return (
			<div>
				<p>{location}</p>
				<p>{data.currently.summary}</p>
			</div>
			);
	} else {
		return <div><p>Wrong Address</p></div>
	}

}

export default Main;



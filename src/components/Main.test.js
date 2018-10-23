import { shallow } from 'enzyme'
import React from 'react'
import Main from './Main'

it('expects to render Main comp', ()=> {

	const mockLocation = [
		{
			location: "Torrance"
		}
	]

	const mockData = {
		daily : {
			data : 100
		}
	}

	expect(shallow(<Main location={mockLocation} weatherData={mockData}/>)).toMatchSnapshot()
})
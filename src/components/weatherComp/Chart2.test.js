import { shallow } from 'enzyme'
import React from 'react'
import Chart2 from './Chart2'

it('expects to render Chart2 comp', ()=> {
	expect(shallow(<Chart2 />)).toMatchSnapshot()
})
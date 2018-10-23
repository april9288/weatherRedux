import { shallow } from 'enzyme'
import React from 'react'
import Chart4 from './Chart4'

it('expects to render Chart4 comp', ()=> {
	expect(shallow(<Chart4 />)).toMatchSnapshot()
})
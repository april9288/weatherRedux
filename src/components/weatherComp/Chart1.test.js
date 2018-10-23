import { shallow } from 'enzyme'
import React from 'react'
import Chart1 from './Chart1'

it('expects to render Chart1 comp', ()=> {
	expect(shallow(<Chart1 />)).toMatchSnapshot()
})
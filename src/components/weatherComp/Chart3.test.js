import { shallow } from 'enzyme'
import React from 'react'
import Chart3 from './Chart3'

it('expects to render Chart3 comp', ()=> {
	expect(shallow(<Chart3 />)).toMatchSnapshot()
})
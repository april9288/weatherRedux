import { shallow } from 'enzyme'
import React from 'react'
import Progressbar from './Progressbar'

it('expects to render Progressbar comp', ()=> {
	expect(shallow(<Progressbar />)).toMatchSnapshot()
})
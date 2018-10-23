import { shallow } from 'enzyme'
import React from 'react'
import Footer from './Footer'

it('expects to render Footer comp', ()=> {
	expect(shallow(<Footer />)).toMatchSnapshot()
})
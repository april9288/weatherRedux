import { shallow } from 'enzyme'
import React from 'react'
import Wrong from './Wrong'

it('expects to render Wrong comp', ()=> {
	expect(shallow(<Wrong />)).toMatchSnapshot()
})
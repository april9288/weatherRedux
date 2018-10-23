import * as actions from './actions'
import moxios from 'moxios'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


it('is about the action setCurrentTempAction!', ()=> {
	const temp = 100
	const expectedAction = {
		type: "CURRENT_TEMP",
		payload: temp
	}
	expect(actions.setCurrentTempAction(temp)).toEqual(expectedAction)
})

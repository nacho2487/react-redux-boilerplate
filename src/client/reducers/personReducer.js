import initialState from './initialState';
import * as types from '../actions/actionTypes';
export default function testReducer(state = initialState.persons, action){
	switch(action.type) {
		case types.LOAD_PERSONS_SUCCESS:
			return action.persons;
		default:
			return state;
	}
}

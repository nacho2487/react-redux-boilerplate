import request from 'superagent';
import * as types from './actionTypes';

export function loadTestSuccess(persons){
	return { type: types.LOAD_AUTHORS_SUCCESS, persons };
}
export function getTest(){
	return function(dispatch){
		return request.get('/api').then(persons => {
			dispatch(loadTestSuccess(persons));
		}).catch(error  => {
			throw(error);
		});
	};

}

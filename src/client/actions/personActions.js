import request from 'superagent';
import * as types from './actionTypes';

export function loadPersonsSuccess(persons){
	return { type: types.LOAD_PERSONS_SUCCESS, persons };
}
export function loadPersons(){
	return function(dispatch){
		return request.get('/api/persons').end((err,res) => {
			dispatch(loadPersonsSuccess(res.body));
		});
	};

}

import React, { PropTypes } from 'react'
import PersonListRow from './PersonListRow';

const PersonList = ({persons}) => {
	return (
		<table className="table">
			<thead>
			<tr>
				<th>&nbsp;</th>
				<th>Name</th>
				<th>Age</th>
			</tr>
			</thead>
			<tbody>
			{persons.map(person =>
				<PersonListRow key={persons.id} course={person}/>
			)}
			</tbody>
		</table>
	)
}

PersonList.propTypes = {
	persons: PropTypes.array.isRequired
};

export default PersonList;

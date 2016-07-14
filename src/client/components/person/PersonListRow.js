import React, { PropTypes } from 'react'

const PersonListRow = ({person}) => {
	return (
		<tr>
			<td>{person.name}</td>
			<td>{person.age}</td>
		</tr>
	)
}
PersonListRow.propTypes = {
	person: PropTypes.object.isRequired
};
export default PersonListRow;

import React, { PropTypes } from 'react';

const PersonListRow = ({person}) => {
	return (
		<tr>
			<td>
				<img src={require('../../content/images/ipad-pro.jpg')} />
				<i className="glyphicon glyphicon-star" />{person.name}
			</td>
		</tr>
	)
}
PersonListRow.propTypes = {
	person: PropTypes.object.isRequired
};
export default PersonListRow;

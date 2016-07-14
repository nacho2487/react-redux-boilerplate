import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as testActions from '../../actions/testActions';
import PersonsList from './PersonList';

class PersonPage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	componentDidMount(){
		this.props.actions.getTest();
	}


	render() {
		const {persons} = this.props;

		return (
			<div>
				<h1>Persons</h1>
				<PersonsList persons={persons}/>
			</div>
		);
	}
}

PersonPage.propTypes = {
	persons: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		persons: state.persons
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(testActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonPage);

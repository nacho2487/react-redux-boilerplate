import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/Home';
import PersonsPage from './components/person/PersonPage';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="persons" component={PersonsPage} />
	</Route>
);

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {getTest} from './actions/testActions';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './content/css/styles.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(getTest());
render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);

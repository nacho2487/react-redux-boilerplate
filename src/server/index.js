import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../../webpack.config.dev';
import open from 'open';
var bodyParser = require('body-parser');


/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/api/persons', function(req, res) {
	const persons = [{id: 1, name: 'john'}, {id: 2, name: 'pep'}];
	res.send(persons);
});


app.get('*', function(req, res) {
	res.sendFile(path.join( __dirname, '../client/index.html'));
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		open(`http://localhost:${port}`);
	}
});

const express =  require('express');
const webpack =  require('webpack');
const path =  require('path');
const config =  require('../../webpack.config');
const open =  require('open');

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/api', function(req, res) {
	res.send([{name: 'juan'}, {name: 'pepe'}]);
});

app.get('/', function(req, res) {
	res.sendFile(path.join( __dirname, '../client/index.html'));
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log(`Express server listening on port ${port}`);
	}
});

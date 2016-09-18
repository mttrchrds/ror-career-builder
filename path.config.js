const path = require('path');

module.exports = {
	source: path.join(__dirname, 'src'),
	sourcePath: '/js/',
	sourcePathCSS: '/css/',
	sourcePathEJS: '/ejs/',
	sourcePathName: 'entry.js',
	build: path.join(__dirname, 'build'),
	buildPath: '/js/',
	buildPathName: 'app.js'
};

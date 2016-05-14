const path = require('path');

module.exports = {
	source: path.join(__dirname, 'src'),
	sourcePath: '/js/',
	sourcePathSCSS: '/scss/',
	sourcePathName: 'entry.js',
	build: path.join(__dirname, 'build'),
	buildPath: '/js/',
  imagePath: '/images/',
	buildPathName: 'app.js'
};
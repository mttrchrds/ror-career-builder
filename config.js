const path = require('path');
const folderOutput = 'public';

module.exports = {
	folderOutput: folderOutput,
	pathSource: path.join(__dirname, 'src'),
	pathOutput: path.join(__dirname, folderOutput),
	pathCSSAbsolute: '/css/',
	pathCSSRelative: 'css/',
	pathSourceTemplate: '/hbs/',
	pathJSAbsolute: '/js/',
	pathJSRelative: 'js/',
	filenameEntry: 'entry.js',
	filenameOutput: 'app.js',
	filenameTemplate: 'index.hbs',
	filenameHTML: 'index.html',
	filenameCSS: 'style.css',
	serverPort: 8080
};

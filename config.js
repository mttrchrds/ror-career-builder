const path = require('path');

module.exports = {
	pathSource: path.join(__dirname, 'src'),
	pathOutput: path.join(__dirname, 'public'),
	pathCSSAbsolute: '/css/',
	pathCSSRelative: 'css/',
	pathSourceTemplate: '/hbs/',
	pathJSAbsolute: '/js/',
	pathJSRelative: 'js/',
	filenameEntry: 'entry.js',
	filenameOutput: 'app.js',
	filenameTemplate: 'index.hbs',
	filenameHTML: 'index.html',
	filenameCSS: 'style.css'
};

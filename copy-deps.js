const { join } = require('path');
const fse = require('fs-extra');

const copycss = async() => {
	await fse.copyFile(
		join(__dirname, 'node_modules', 'codemirror', 'lib', 'codemirror.css'),
		join(__dirname, 'build', 'codemirror.css'),
	);
	await fse.copyFile(
		join(__dirname, 'node_modules', 'codemirror', 'theme', 'ayu-mirage.css'),
		join(__dirname, 'build', 'codemirror-ayu-mirage.css'),
	);
	await fse.copyFile(
		join(__dirname, 'node_modules', 'codemirror', 'addon', 'hint', 'show-hint.css'),
		join(__dirname, 'build', 'codemirror-show-hint.css'),
	);
}

copycss().catch(err => console.error(err))

const fs = require('fs');
const { join } = require('path');
const archiver = require('archiver');

const pack = () => new Promise((resolve, reject) => {
	try {
		const targetZip = join(__dirname, 'html-block-with-highlighting.zip');
		if (fs.existsSync(targetZip)) {
			fs.unlinkSync(targetZip);
		}
		const output = fs.createWriteStream(targetZip);
		const archive = archiver('zip', { zlib: { level: 9 } });

		output.on('close', function() { resolve(); });

		archive.on('warning', function(err) {
			if (err.code !== 'ENOENT') {
				archive.abort();
				reject(err);
			}
		});

		archive.on('error', function(err) {
			archive.abort();
			reject(err);
		});

		archive.pipe(output);

		archive.directory(join(__dirname, 'build'), 'html-block-with-highlighting/build');
		archive.directory(join(__dirname, 'src'), 'html-block-with-highlighting/src');
		archive.file(join(__dirname, 'copy-deps.php'), { name: 'html-block-with-highlighting/copy-deps.php' });
		archive.file(join(__dirname, 'pack.js'), { name: 'html-block-with-highlighting/pack.js' });
		archive.file(join(__dirname, 'index.php'), { name: 'html-block-with-highlighting/index.php' });
		archive.file(join(__dirname, 'package.json'), { name: 'html-block-with-highlighting/package.json' });
		archive.file(join(__dirname, 'package-lock.json'), { name: 'html-block-with-highlighting/package-lock.json' });
		archive.file(join(__dirname, 'README.md'), { name: 'html-block-with-highlighting/README.md' });
		archive.file(join(__dirname, 'readme.txt'), { name: 'html-block-with-highlighting/readme.txt' });
		archive.file(join(__dirname, 'assets/screenshot-1.png'), { name: 'html-block-with-highlighting/assets/screenshot-1.png' });
		archive.file(join(__dirname, 'assets/screenshot-2.png'), { name: 'html-block-with-highlighting/assets/screenshot-2.png' });
		archive.file(join(__dirname, 'LICENSE'), { name: 'html-block-with-highlighting/LICENSE' });

		archive.finalize();
	} catch (err) {
		reject(err);
	}
});

pack().then(() => console.log('zipped')).catch(err => console.error(err));

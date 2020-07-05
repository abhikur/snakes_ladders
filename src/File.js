const fs = require('fs');
const path = require('path');

class File {
	constructor(filePath) {
		this.filePath = filePath;
	}
	
	load() {
		return JSON.parse(fs.readFileSync(path.join(__dirname, this.filePath), 'utf-8'));
	}
}

module.exports = File;
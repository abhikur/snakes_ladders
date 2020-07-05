const sinon = require('sinon');
const File = require('../File');
const fs = require('fs');
const assert = require('assert');

describe('File', () => {
	it('should call fs readFileSync with given filepath', () => {
		let expectedFilePath;
		let expectedOption;
		sinon.replace(fs, 'readFileSync', (filePath, option) => {
			expectedFilePath = filePath
			expectedOption = option
			return "{\"a\": \"1\"}"
		})
		const filepath = 'someFile.json'
		const file = new File(filepath);
		file.load();
		
		assert.strictEqual(expectedFilePath.split('/').pop(), filepath)
		assert.strictEqual(expectedOption, 'utf-8')
	});
});
const assert = require('assert');

const invalidNumber = require('../../validators/invalidNumber');

describe('invalid number', () => {
	it('should return true for invalid values', () => {
		assert.strictEqual(invalidNumber('abc'), true)
		assert.strictEqual(invalidNumber('0'), true)
		assert.strictEqual(invalidNumber('7'), true)
		assert.strictEqual(invalidNumber(NaN), true)
	});
	it('should return false for valid values', () => {
		assert.strictEqual(invalidNumber('1'), false)
		assert.strictEqual(invalidNumber('3'), false)
		assert.strictEqual(invalidNumber('6'), false)
	});
})
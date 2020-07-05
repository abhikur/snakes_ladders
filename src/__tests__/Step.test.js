const assert = require('assert');

const Step = require('../Step');

describe('Step isInvalid', () => {
	it('should return true for invalid values', () => {
		assert.strictEqual(new Step('abc').isInvalid(), true)
		assert.strictEqual(new Step('0').isInvalid(), true)
		assert.strictEqual(new Step('7').isInvalid(), true)
		assert.strictEqual(new Step(NaN).isInvalid(), true)
	});
	it('should return false for valid values', () => {
		assert.strictEqual(new Step('1').isInvalid(), false)
		assert.strictEqual(new Step('3').isInvalid(), false)
		assert.strictEqual(new Step('6').isInvalid(), false)
	});
})
const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('calculateNumber', function () {
	it('should return sum of rounded numbers', function () {
		assert.strictEqual(calculateNumber(2.4, 3.7), 6);
		assert.strictEqual(calculateNumber(2.6 , 3.4), 6);
	});

	it('should handle negative numbers', function () {
		assert.strictEqual(calculateNumber(-2.4, -3.7), -6);
		assert.strictEqual(calculateNumber(-2.6, -3.4), -6);
	});
});

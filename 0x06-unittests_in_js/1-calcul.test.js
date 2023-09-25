const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', function () {
	it('should return sum of rounded numbers', function () {
		assert.strictEqual(calculateNumber('SUM', 2.4, 3.7), 6);
		assert.strictEqual(calculateNumber('SUM', 2.6 , 3.4), 6);
	});

	it('should subtract two rounded numbers', function () {
		assert.strictEqual(calculateNumber('SUBTRACT', 6.4, 3), 3);
		assert.strictEqual(calculateNumber('SUBTRACT', 7.6, 3), 5);
	});

	it('should divide two rounded numbers', function () {
		assert.strictEqual(calculateNumber('DIVIDE', 8.8, 2), 4.5);
		assert.strictEqual(calculateNumber('DIVIDE', 3, 0), 'Error');
	});
	it('should handle the invalid', function () {
		assert.strictEqual(calculateNumber('INVALID', 2, 3), 'Invalid type');
	});
});

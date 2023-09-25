const chai = require('chai');
const expect = chai.expect
const calculateNumber = require('./2-calcul_chai');


describe('calculateNumber', function () {
	it('should return sum of rounded numbers', function () {
		expect(calculateNumber('SUM', 2.4, 3.7), 6);
		expect(calculateNumber('SUM', 2.6 , 3.4), 6);
	});

	it('should subtract two rounded numbers', function () {
		expect(calculateNumber('SUBTRACT', 6.4, 3), 3);
		expect(calculateNumber('SUBTRACT', 7.6, 3), 5);
	});

	it('should divide two rounded numbers', function () {
		expect(calculateNumber('DIVIDE', 8.8, 2), 4.5);
		expect(calculateNumber('DIVIDE', 3, 0), 'Error');
	});
	it('should handle the invalid', function () {
		expect(calculateNumber('INVALID', 2, 3)).to.equal('Invalid type');
	});
});

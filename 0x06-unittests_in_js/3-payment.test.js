const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
	it('should call Utils.calculateNumber with the correct arguments and log the total', function () {
		const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
		const totalAmount = 100;
		const totalShipping = 20;

		sendPaymentRequestToApi(totalAmount, totalShipping);

		expect(calculateNumberSpy.calledWith('SUM', totalAmount, totalShipping)).to.be.true;
		calculateNumberSpy.restore();
	});
});


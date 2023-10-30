const sinon = require('sinon');
const { sendPaymentRequestToApi } = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM and log the result', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20);

    sinon.assert.calledWith(consoleLogSpy, 'The total is:120');

    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });
});


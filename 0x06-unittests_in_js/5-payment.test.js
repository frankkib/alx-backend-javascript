const { expect } = require('chai');
const sinon = require('sinon');

const { sendPaymentRequestToApi } = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('logs the correct message and is called once with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(consoleSpy);
    expect(consoleSpy.calledWith('The total is:120')).to.be.true;
  });

  it('logs the correct message and is called once with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledOnce(consoleSpy);
    expect(consoleSpy.calledWith('The total is:20')).to.be.true;
  });
});


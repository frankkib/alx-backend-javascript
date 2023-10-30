const { expect } = require('chai');
const sinon = require('sinon');

const { sendPaymentRequestToApi } = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  let calculateNumberStub;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(require('./utils'), 'calculateNumber').returns(10);
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('logs to the console the right messages', () => {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);

    expect(consoleSpy.calledWith('The total is:10')).to.be.true;
  });
});


const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with a success message when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should reject with an error message when success is false', function (done) {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done(new Error('Expected the promise to be rejected, but it was resolved.'));
      })
      .catch((error) => {
        expect(error).to.equal('API request failed');
        done();
      });
  });
});


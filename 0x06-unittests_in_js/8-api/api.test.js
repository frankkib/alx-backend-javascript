const request = require('request');
const { expect } = require('chai');

const app = require('./api');

describe('Index page', () => {
  let server;

  before(() => {
    server = app.listen(7865);
  });

  after(() => {
    server.close();
  });

  it('Correct status code?', (done) => {
    request.get('http://localhost:7865', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});


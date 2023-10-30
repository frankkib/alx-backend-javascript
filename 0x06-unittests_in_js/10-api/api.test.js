const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  let server;

  before((done) => {
    server = app.listen(7865, () => {
      done();
    });
  });

  after((done) => {
    server.close(() => {
      done();
    });
  });

  it('Correct status code?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
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

  describe('/cart/:id', () => {
    it('Correct status code when :id is a number?', (done) => {
      request.get('http://localhost:7865/cart/123', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
      request.get('http://localhost:7865/cart/abc', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('/available_payments', () => {
    it('Correct status code for /available_payments?', (done) => {
      request.get('http://localhost:7865/available_payments', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('Correct result for /available_payments?', (done) => {
      request.get('http://localhost:7865/available_payments', (error, response, body) => {
        const expected = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };
        expect(JSON.parse(body)).to.deep.equal(expected);
        done();
      });
    });
  });

  describe('/login', () => {
    it('Correct status code for POST /login?', (done) => {
      request.post(
        {
          url: 'http://localhost:7865/login',
          json: { userName: 'JohnDoe' },
        },
        (error, response, body) => {
          expect(response.statusCode).to.equal(200);
          done();
        }
      );
    });

    it('Correct result for POST /login?', (done) => {
      request.post(
        {
          url: 'http://localhost:7865/login',
          json: { userName: 'JohnDoe' },
        },
        (error, response, body) => {
          expect(body).to.equal('Welcome JohnDoe');
          done();
        }
      );
    });
  });
});


const request = require('request');
const { expect } = require('chai');
const API_URL = 'http://localhost:7865';

describe('API Integration test', () => {
    it('GET / returns "Welcome to the payment system"', (done) => {
        request.get(`${API_URL}/`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
});

describe('Regex integration testing', () => {
    it('GET /cart/go is invalid"', (done) => {
        request.get(`${API_URL}/cart/go`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });
    it('GET /cart/1 is valid"', (done) => {
        request.get(`${API_URL}/cart/1`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });
    it('GET /cart/1 returns "Payment methods for cart :id"', (done) => {
        request.get(`${API_URL}/cart/1`, (_err, res, body) => {
            expect(body).to.be.equal('Payment methods for cart 1');
            done();
        });
    });
});

describe('', () => {
    it('POST /login returns valid response', (done) => {
        request.post({
        url:`${API_URL}/login`,
        json: true,
        body: {userName: 'Prisca'}
        }, (_err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(body).to.be.equal('Welcome Prisca');
          done();
        });
      });

      it('GET /available_payments returns valid response', (done) => {
        request.get(`${API_URL}/available_payments`, (_err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(JSON.parse(body))
            .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
          done();
        });
      });
})
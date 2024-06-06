const request = require('request');
const { expect } = require('chai');

describe('API Integration test', () => {
    const API_URL = 'http://localhost:7865';

    it('GET / returns "Welcome to the payment system"', (done) => {
        request.get(`${API_URL}/`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
});

describe('Regex integration testing', () => {
    const API_URL = 'http://localhost:7865';
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

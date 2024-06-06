const getPaymentTokenFromAPI = require('./6-payment_token')
const chai = require('chai')
const expect = chai.expect;

describe('getPaymentTokenFromAPI', (done) => {
    it('should return a successful response from the API when success is true', () => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.deep.equal({ data: 'Successful response from the API' });
                done();
            });
    });
})
const chai = require('chai')
const sinon = require('sinon')
const expect = chai.expect;
const sendPaymentRequestToApi = require('./4-payment')

describe('sendPaymentRequestToApi', () => {
    let spy;
    beforeEach(() => {
        spy = sinon.spy(console, 'log');
    });
    it('should call console.log "The total is: 120', () => {
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnceWith('The total is: 120')).to.be.true;
    });
    it('should call console.log "The total is: 20', () => {
        sendPaymentRequestToApi(10, 10);
        expect(spy.calledOnceWith('The total is: 20')).to.be.true;
    });
    afterEach(() => {
        spy.restore();
    });
})

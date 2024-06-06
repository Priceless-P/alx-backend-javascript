const chai = require('chai')
const sinon = require('sinon')
const expect = chai.expect;
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./4-payment')

describe('sendPaymentRequestToApi', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    it('should call Utils.calculateNumber with SUM, 100, and 20', () => {
        expect(stub.calledOnceWith('SUM', 100, 20));
        stub.restore();
    })
    it('should call console.log "The total is: 10"', () => {
        expect(spy.calledWith('The total is: 10')).to.be.true;
        spy.restore();
    })
})

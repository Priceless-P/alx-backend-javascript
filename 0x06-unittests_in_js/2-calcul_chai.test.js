const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;


describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6);
    });

    it('should return 3 when inputs are 1.2 and 1.6', () => {
      expect(calculateNumber('SUM', 1.2, 1.6)).to.be.equal(3);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
    });

    it('should return 0 when inputs are 1.6 and 2.4', () => {
      expect(calculateNumber('SUBTRACT', 1.6, 2.4)).to.be.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equal('Error');
    });

    it('should return "Error" when dividing by a number that rounds to 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.be.equal('Error');
    });
  });
 });

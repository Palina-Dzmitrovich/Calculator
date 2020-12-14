const Calculator = require('/Calculator/calc/calculator.js');
const {expect} = require('chai');

describe('multiplyNumbers positive scenarios', function() {

    let multiplication;

    beforeEach(function() {
        multiplication = new Calculator();
    });

    afterEach(function() {
        multiplication = null;
    });

    it('should return the product of several (>=2) whole positive numbers', function() {
       expect(multiplication.multiplyNumbers(6, 10, 7, 2)).to.equal(840); 
    });

    it('should return the product of several (>=2) whole negative numbers', function() {
        expect(multiplication.multiplyNumbers(-8, -100, -7, -2)).to.equal(11200); 
     });

    it('should return the product of several (>=2) fractions', function() {
        expect(multiplication.multiplyNumbers(4.5, -5.75, 2.25)).to.equal(-58.21875); 
     });

     it('should return the product of several (>=2) zeros', function() {
        expect(multiplication.multiplyNumbers(0, 0, 0, 0)).to.equal(0); 
     });

     it('should return the product of several (>=2) numbers (positive and negative), zeros, fractions', function() {
        expect(multiplication.multiplyNumbers(8.75, 10, -7, 0, -0.5, 0, 200)).to.equal(0); 
     });

    


});

describe('multiplyNumbers negative scenarios', function() {

    let multiplication;

    beforeEach(function() {
        multiplication = new Calculator();
    });

    afterEach(function() {
        multiplication = null;
    });

    it('should display an error message if no parameters are provided', function() {
        expect(() => multiplication.multiplyNumbers().to.throw('Please, provide at least 2 numbers'));
    });

    it('should display an error message if only 1 parameter is provided', function() {
        expect(() => multiplication.multiplyNumbers(87).to.throw('Please, provide at least 2 numbers'));
    });

    it('should display an error message if at least one of the parameters is not a number', function() {
        expect(() => multiplication.multiplyNumbers(8, 0, 'string', 88, -2)).to.throw('[string] is not a number');
    });
});
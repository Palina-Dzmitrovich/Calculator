const Calculator = require('/Calculator/calc/calculator.js');
const {expect} = require('chai');

describe('addNumbers positive scenarios', function() {
    let addition;

    beforeEach(function() {
        addition = new Calculator();
    });

    afterEach(function() {
        addition = null;
    });

    it('should return the sum of several (>=2) whole positive numbers', function() {
       expect(addition.addNumbers(10, 7, 9)).to.equal(26); 
    });

    it('should return the sum of several (>=2) whole negative', function() {
        expect(addition.addNumbers(-6, -34)).to.equal(-40); 
    });

    it('should return the sum of several (>=2) zeros', function() {
        expect(addition.addNumbers(0, 0, 0, 0)).to.equal(0); 
    });

    it('should return the sum of several (>=2) fractions', function() {
        expect(addition.addNumbers(5.34, 7.26, 4.40, -7.50)).to.equal(9.50);
    });

    it('should return the sum of several (>=2) numbers (positive and negative), zeros, fractions', function() {
        expect(addition.addNumbers(2, -18, 0, 0.5, 7.5, 0)).to.equal(-8); 
     });

});

describe('addNumbers negative scenarios', function() {
    let addition;
    
    beforeEach(function() {
        addition = new Calculator();
    });

    afterEach(function() {
        addition = null;
    });

    it('should display an error message if no parameters are provided', function() {
        expect(() => addition.addNumbers().to.throw('Please, provide at least 2 numbers'));
    });

    it('should display an error message if only 1 parameter is provided', function() {
        expect(() => addition.addNumbers(6).to.throw('Please, provide at least 2 numbers'));
    });

    it('should display an error message if at least one of the parameters is not a number', function() {
        expect(() => addition.addNumbers(5, 444, true, -7)).to.throw('[true] is not a number');
    });

});
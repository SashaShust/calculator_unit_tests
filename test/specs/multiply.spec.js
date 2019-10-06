const Calculator = require('../../app/calculator.js');
const testData = require('../data/dataForMultiplication.json');
const chai = require('chai');
const spies = require('chai-spies');
const {expect} = require('chai');
chai.use(spies);

describe('multiply', function () {
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator();
        spy = chai.spy.on(calculator, 'multiply');
    });

    afterEach(() => {
        calculator = null;
    });

    testData.positive.forEach((data) => {
        it(`should calculate ${data.result} when function called with ${data.a} and ${data.b}`, () => {
            expect(calculator.multiply(+data.a, +data.b)).to.be.equal(data.result);
        });
    });

    testData.negative.forEach((data) => {
        it(`should throw an error when multiplying ${data.a} and ${data.b}`, () => {
            expect(function () {
                calculator.multiply(data.a, data.b)
            }).to.throw(TypeError, data.errorMessage);
        });
    });
});
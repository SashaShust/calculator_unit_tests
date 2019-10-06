const Calculator = require('../../app/calculator.js');
const testData = require('../data/dataForSubstraction.json');
const chai = require('chai');
const spies = require('chai-spies');
const {expect} = require('chai');
chai.use(spies);

describe('substract', function () {
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator();
        spy = chai.spy.on(calculator, 'substract');
    });

    afterEach(() => {
        calculator = null;
    });

    testData.positive.forEach((data) => {
        it(`should calculate ${data.result} when function called with ${data.a} and ${data.b}`, () => {
            expect(calculator.substract(+data.a, +data.b)).to.be.equal(data.result);
        });
    });

    testData.negative.forEach((data) => {
        it(`should throw an error when calculating substraction ${data.a} and ${data.b}`, () => {
            expect(function () {
                calculator.substract(data.a, data.b)
            }).to.throw(TypeError, data.errorMessage);
        });
    });
});
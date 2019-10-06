const Calculator = require('../../app/calculator.js');
const testData = require('../data/dataForPow.json');
const chai = require('chai');
const spies = require('chai-spies');
const {expect} = require('chai');
chai.use(spies);

describe('power', function () {
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator();
        spy = chai.spy.on(calculator, 'power');
    });

    afterEach(() => {
        calculator = null;
    });

    testData.positive.forEach((data) => {
        it(`should calculate ${data.result} when function called with ${data.a} and ${data.b}`, () => {
            expect(calculator.power(+data.a, +data.b)).to.be.equal(data.result);
        });
    });

    testData.negative.forEach((data) => {
        it(`should throw an error when calculating sum ${data.a} and ${data.b}`, () => {
            expect(function () {
                calculator.power(data.a, data.b)
            }).to.throw(TypeError, data.errorMessage);
        });
    });
});
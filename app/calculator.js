class Calculator {

    constructor() {
    }

    checkParams(a, b) {
        if ((typeof a || typeof b) !== 'number') throw new TypeError('Was entered wrong parameters');
    }

    add(a, b) {
        this.checkParams(a, b);
        return a + b;
    }

    substract(a, b) {
        this.checkParams(a, b);
        return a - b;
    }

    multiply(a, b) {
        this.checkParams(a, b);
        return a * b;
    }

    power(a, b) {
        this.checkParams(a, b);
        return Math.pow(a, b)
    }
};

module.exports = Calculator;
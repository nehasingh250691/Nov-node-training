var accumulator = require('./accumulator-es6');

accumulator.add(100);
accumulator.subtract(50);
accumulator.multiply(10);
accumulator.divide(2);

console.log(accumulator.result);
console.log(accumulator.getResult());
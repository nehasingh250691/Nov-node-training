const calculator = require('./calculator');

var x = 100, 
    y = 50;

console.log('[@calculatorClient.js]')
console.log(calculator);

console.log(calculator.add(x,y));
console.log(calculator.subtract(x,y));
console.log(calculator.multiply(x,y));
console.log(calculator.divide(x,y));
var result = 0;

var accumulator = {
    add(x){
        result += x;
    },
    subtract(x){
        result -= x;
    },
    multiply(x){
        result = result * x;
    },
    divide(x){
        result = result / x;
    },
    getResult(){
        return result;
    }
}

module.exports = accumulator;
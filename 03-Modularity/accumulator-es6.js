var result = 0;

class Accumulator {
    constructor(){}
    add(x){
        result += x;
    }
    subtract(x){
        result -= x;
    }
    multiply(x){
        result = result * x;
    }
    divide(x){
        result = result / x;
    }
    getResult(){
        return result;
    }
}

module.exports = new Accumulator();
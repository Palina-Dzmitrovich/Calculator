// A simple class containing methods for performing arithmetical operations

class Calculator {
    constructor () {
        
    }

    addNumbers() {
        if (arguments.length < 2) {
            throw new Error('Please, provide at least 2 numbers');
        }

        this.numbers = Object.values(arguments);

        for (let i = 0; i < this.numbers.length; i++) {
           let typeOfParameters = typeof this.numbers[i];
           if (typeOfParameters !== 'number') {
               throw new Error(`[${this.numbers[i]}] is not a number`);               
            } 
        }
        
        return this.numbers.reduce((a, b) => a + b);
    }  

    multiplyNumbers() {
        if (arguments.length < 2) {
            throw new Error('Please, provide at least 2 numbers');
        }

        this.numbers = Object.values(arguments);

        for (let i = 0; i < this.numbers.length; i++) {
            let typeOfParameters = typeof this.numbers[i];
            if(typeOfParameters !== 'number') {
                throw new Error(`[${this.numbers[i]}] is not a number`);               
            } 
         }
        return this.numbers.reduce((a, b) => a * b);
    }

}

module.exports = Calculator;


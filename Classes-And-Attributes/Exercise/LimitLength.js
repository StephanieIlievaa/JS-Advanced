// class
//the point of increase and decrease is to manipulate the inner string

class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;

    }
    //we receive length in the functions and we 
    increase(length) {
        this.innerLength +=  length;
    }
    decrease(length) {
        this.innerLength = this.innerLength - length < 0 ? 0 : this.innerLength - length;
    }

 
    toString() {
        if (this.innerString.length > this.innerLength) {
            return this.innerString.substring(0, this.innerLength) + '...';
        } else if (this.innerLength == 0) {
            return '...';

        }
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test 

test.decrease(3);
console.log(test.toString()); // Te... 

test.decrease(5);
console.log(test.toString()); // ... 

test.increase(4);
console.log(test.toString()); // Test 
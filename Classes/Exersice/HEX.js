class Hex {
    constructor(value) {
        this.value = value;
    }
    //return value property of  the hex class
    valueOf() {
        return this.value
    }

    // add a number or Hex object and return new Hex object
    plus(number) {
        return new Hex(this.value + number)
    }
    //sunstract a number or Hex object and return new Hex object
    minus(number) {
        return new Hex(this.value - number)
    }
    //show its hexadecimal value 
    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }
    //Hexidecimal number conver to standart decimal numbers
    // weslice from the second index to pass '0x'
    parse(string) {
        return string.slice(2).toString(10)
    } 

}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
// function expression syntax
// function expressions in JS are not hoisted, like function declarations
// we can`t use function expressions before we create them\
//to use ternary operator we need to have expressions(evaluated to produce a value), not statements(executed to make something happen)
 const solve = (array, delimiter) =>  {
     return array.join(delimiter);


// let result =  '';
// for (let i = 0; i < array.length; i++) {
// result += i == array.length - 1 ?  array[i] : array[i] + delimiter;
// }
// return result;

}
//console.log(solve(['One','Two','Three','Four','Five'],'-'));
console.log(solve(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_'));
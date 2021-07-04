function solve(firstArg, secondArg, thirdArg) {
let sumLength;
let averageLength;

let firstArgumentLength = firstArg.length;
let secondArgumentLength = secondArg.length;
let thirdArgumentLength = thirdArg.length;

 sumLength = firstArgumentLength + secondArgumentLength + thirdArgumentLength;
 averageLength = Math.floor(sumLength /3);

console.log(sumLength);
console.log(averageLength);
}
solve('pasta', '5', '22.3');
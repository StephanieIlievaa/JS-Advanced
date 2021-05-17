function solve(array) {
let result = {};
// every even - property
// every odd - value
for(let i = 0; i < array.length; i+=2) {
result[array[i]] = Number(array[i + 1]);
}

return result;

}

console.log(solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));
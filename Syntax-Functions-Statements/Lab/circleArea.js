function solve(input) {
    let result;
    let typeInput = typeof(input);

    if (typeInput === 'number') {
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeInput}.`);
    }
}
solve('name');
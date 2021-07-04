function solve(array) {
    return `${array.reduce((a, v) => a + v, 0)}
${array.reduce((a, v) => a + 1 / v, 0)}
${array.join("")}`
}
solve([1, 2, 3]);
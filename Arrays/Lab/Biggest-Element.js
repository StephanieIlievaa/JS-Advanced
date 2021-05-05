
let biggest = matrix => Math.max.apply(null, matrix
    .reduce((a, b) => a.concat(b)));


console.log(biggest([[3, 5, 7, 12],
[-1, 4, 33,
    2],
[8, 3, 0, 4]]));
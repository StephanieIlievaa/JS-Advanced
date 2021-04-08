function solve(n, m) {

    [n, m] = [n, m].map(Number)
    let sum = 0

    for (let i = n; i <= m; i++) {
        sum += i
    }

    return sum
}
solve('1', '5');
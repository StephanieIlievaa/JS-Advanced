function solve(arr, rotation) {
    for (let i = 0; i < rotation; i++) {
        const element = arr.pop()
        arr.unshift();
    }
    return arr.join(' ');
}
solve(['1', '2', '3', '4'], 2);
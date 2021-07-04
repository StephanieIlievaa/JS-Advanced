function solve(input) {
    count = input;
    const row = '* '.repeat(count).trim();

    for (let i = 0; i < count; i++) {
        console.log(row);
    }
}
solve(5);
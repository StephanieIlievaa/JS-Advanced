function solve(array) {

    return array.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }).join("\n");
}
solve(['test', 'Deny', 'omen', 'Default']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
solve(['alpha', 'beta', 'gamma']);
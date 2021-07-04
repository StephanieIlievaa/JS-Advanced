function solve(array, n) {
    let newArr = []
    for (let i = 0; i < array.length; i += n) {
        const element = array[i];
        newArr.push(element);
    }
    return newArr; 
}
console.log(solve(['5', '20', '31', '4', '20'], 2));

//console.log(solve(['1', '2', '3', '4', '5'], 6));

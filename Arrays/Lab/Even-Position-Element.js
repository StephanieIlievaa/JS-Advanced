function solve(array) {

    let index = array.indexOf('30');
    if (index > -1) {
        array.splice(index, 1);

    }
    console.log(array.join(' '));
}
solve(['20', '30', '40']);
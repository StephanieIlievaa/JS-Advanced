function firstSolution(x, y, z) {

    let result;

    if (x > y && x > z) {
        result = x;
    }
    if (y > x && y > z) {
        result = y;
    }
    if (z > x && z > y) {
        result = z;
    }

    return `The largest number is ${result}.`;

}
firstSolution(5, -3, 16);
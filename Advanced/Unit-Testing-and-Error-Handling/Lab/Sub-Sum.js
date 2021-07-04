// function subSum(arr, start, end) {
//     //If the first element is not an array, return NaN
//     if (Array.isArray(arr) == false) {
//         return NaN;
//     }

//     //If the start index is less than zero, consider its value to be a zero
//     if (start < 0) {
//         start = 0;
//     }
//     //If the end index is outside the bounds of the array, assume it points to the last index of the array
//     if (end > arr.length - 1) {
//         end = arr.length - 1;
//     }

//     return arr.slice(start, end + 1).reduce((a, c) => a + Number(c), 0);

//     // return arr
//     // .slice(start, end + 1)
//     // .map(Number)
//     // .reduce((a, c) => a + c, 0);
 
function subSum(numbers, startIndex, endIndex) {
    if (Array.isArray(numbers) == false) {
        return NaN;
    }
    startIndex = startIndex < 0 ? 0 : startIndex;
    endIndex = endIndex > numbers.length ? numbers.length - 1 : endIndex;
    return numbers.slice(startIndex, endIndex + 1).map(Number).reduce((acc, curr) => acc + curr, 0);
}
// }
subSum([10, 20, 30, 40, 50, 60], 3, 300);
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([10, 'twenty', 30, 40], 0, 2);
subSum([], 1, 2);
subSum('text', 0, 2);
  
function solve(array) {
    return array.reduce(function(result, currentValue, index, initalArray) {
        if (currentValue >= result[result.length - 1] || result.length === 0) {
            result.push(currentValue)
        }
        return result;
    }, [])

// function solve(array) {
//     return array.reduce(function(result, currentValue, index, initalArray) {
//         if (currentValue >= result[result.length - 1] || result.length === 0) {
//             result.push(currentValue)
//         }
//         return result;
//     }, [])
// }

// let result = [arr[0]]
// for(let i = 0; i < arr.length; i++) {
//    let element = arr[i];
//    if (element >= result[result.length - 1] || result.length === 0); {
//        result.push(element);
//    } 
// }
// return result

}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);

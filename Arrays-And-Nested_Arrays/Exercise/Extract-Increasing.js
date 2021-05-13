function solve(arr) {
    //accumulator -> the result in our function
    return arr.reduce(function (result, currentValue, index, initialArr) {
        if (currentValue >= result[result.length - 1]) {
            console.log(result);
           console.log( result.push(currentValue));
           return result;
        }
        return result
    }, [arr[0]])
      
    


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
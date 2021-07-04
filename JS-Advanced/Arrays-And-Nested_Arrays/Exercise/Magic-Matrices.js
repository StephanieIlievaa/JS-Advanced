function solve(array) {  
 
    let rowSums = [];
    let colSums = [];
    // iterate throught every array and calc the sum of each
    for (let i = 0; i < array.length; i++) {
        let row = array[i];
        let sum = row.reduce((result, current) => (result + current), 0);
        rowSums.push(sum);
    }
    
    //Now to take the colums, we will make another for-loop and use transposing(matrix) - to make the colums -> rows && rows -> colums
    for (let i = 0; i < array.length; i++) {
       
        let newRow = [];
        for (let y = 0; y < array.length; y++) {
         
             newRow.push(array[y][i]) 
        }
        
        let sum = newRow.reduce((result, current) => (result + current), 0);
        colSums.push(sum);
    }
    
    return rowSums.concat(colSums).every((el, i, array) => el === array[0]);

  
}
console.log(solve([
    [4, 5, 6], 
    [6, 5, 4], 
    [5, 5, 5]  
]));
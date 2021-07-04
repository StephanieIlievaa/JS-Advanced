function solve(nums = [arr]) {
    
function sortNumber(a, b) {
    return a -b;
}
nums.sort(sortNumber);
console.log(nums.join('\n'));
}
solve([7, -2, 8, 9]);
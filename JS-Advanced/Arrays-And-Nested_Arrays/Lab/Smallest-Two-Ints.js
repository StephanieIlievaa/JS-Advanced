function solve(array) {
    nums = array.sort((a, b) => a - b).slice(0, 2).join(" ");
    console.log(nums);

}
solve([30, 15, 50, 5]);
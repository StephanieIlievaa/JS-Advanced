function solve(arrayNum) {
    let odd = (arrayNum.filter((num, i) => i % 2 === 1));
    //console.log(odd);

    let double = odd.map(j => j * 2);
    //console.log(double);

    let reverse = (double.reverse()).join(" ");
    console.log(reverse);
}
solve([10, 15, 20, 25]);
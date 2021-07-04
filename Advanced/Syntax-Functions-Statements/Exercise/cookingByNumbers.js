function cookingByNumbers(input) {
    var number = Number(input[0]);

    let chop = x => x/2;
    let dice = x => Math.sqrt(x);
    let spice = x => ++x;
    let bake = x => x*3;
    let fillet = x => x - x * 0.2;

    for(let i=1; i<=5; i++) {
        switch (input[i]) {
            case "chop":
                number = chop(number);
                console.log(number);
                break;
            case "dice":
                number = dice(number);
                console.log(number);
                break;
            case "spice":
                number = spice(number);
                console.log(number);
                break;
            case "bake":
                number = bake(number);
                console.log(number);
                break;
            case "fillet":
                number = fillet(number);
                console.log(number);
                break;
        }
    }
}




//function cookingByNumbers(...arr) {
 // let num = +arr.shift()

//  while (arr.length > 0) {
  //  let currentOperation = arr.shift()
   // if (currentOperation == 'chop') console.log(num /= 2)
   // if (currentOperation == 'dice') console.log(num = Math.sqrt(num))
   // if (currentOperation == 'spice') console.log(num += 1)
  //  if (currentOperation == 'bake') console.log(num *= 3)
  //  if (currentOperation == 'fillet') console.log(num *= 0.80)
//  }
//}


cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);

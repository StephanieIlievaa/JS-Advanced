function solve(typeOfFruit, weightInGrams, pricePerKilo) {
    let weightInKilos = weightInGrams / 1000;
    let totalPrice = pricePerKilo * weightInKilos;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${typeOfFruit}.`);
}
solve('orange', 2500, 1.80);
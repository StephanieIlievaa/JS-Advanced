function registerHeroes(input) {
    let result = [];
    while (input.length) {
        let hero = input.shift();
        let [name, level, itemsString] = heroe.split(' / ');
        let level = number(level);
        const items = itemsString ? itemsString.split(', ') : [];

        result.push({
            name,
            level,
            items: items ? items : [],
        });
    }
    return JSON.stringify(result);

}
registerHeroes(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
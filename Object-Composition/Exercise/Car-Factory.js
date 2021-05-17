function carFactory(input) {
    function getEngine(power) {
        const engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 },
        ]


        return engines.find(el => el.power >= power);
    }

    function getCarriage(carriage, color) {
        return {
           type: carriage,
            color
        }
    }

    function getWheels(wheelsize) {
        let wheel = Math.floor(wheelsize) % 2 === 0
            ? Math.floor(wheelsize) - 1
            : Math.floor(wheelsize)

           // return [wheel, wheel, wheel, wheel];
           //.fill -> start filling from index 0 to index 4; 
           return Array[4].fill(wheel, 0, 4);
    }

    return {
        model: input.model,
        engine: getEngine(input.power),
        carriage: getCarriage(input.carriage, input.power),
        wheels: getWheels(input.wheelsize)
    }
}
solve({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 });
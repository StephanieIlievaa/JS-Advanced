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


// function solve(order) {
//   let storage = {
//     engine: {
//       "Small engine": { power: 90, volume: 1800 },
//       "Normal engine": { power: 120, volume: 2400 },
//       "Monster engine": { power: 200, volume: 3500 },
//     },
//     carriage: {
//       hatchback: { type: "hatchback", color: "" },
//       coupe: { type: "coupe", color: "" },
//     },
//     selectEngine(pow) {
//       for (const eng in this.engine) {
//         if (this.engine[eng].power >= pow) {
//           return this.engine[eng];
//         }
//       }
//     },
//     selectCarriage(carr, col) {
//       let result = this.carriage[carr];
//       result.color = col;
//       return result;
//     },
//     selectWheels(size) {
//       let resolved = size % 2 === 0 ? size - 1 : size;
//       return [resolved, resolved, resolved, resolved];
//     },
//   };
//   return {
//     model: order.model,
//     engine: storage.selectEngine(order.power),
//     carriage: storage.selectCarriage(order.carriage, order.color),
//     wheels: storage.selectWheels(order.wheelsize),
//   };
// }
solve({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 });

function solve(area, vol, input) {

    let coordinatesArr = JSON.parse(input);
    let resultArr = [];

    for (const coordinates of coordinatesArr) {
        let resultObj = {
            area: area.call(coordinates),
            volume: vol.call(coordinates),
        };

        resultArr.push(resultObj);
    }
    return resultArr;

    //2nd way to solve 
    // let objects = JSON.parse(input);
    // function calc(obj) {
    // let areaObj = Math.abs(area.call(obj));
    // let volumeObj = Math.abs(vol.call(obj));
    // return { area: areaObj, volume: volumeObj }
    // }
    // return objects.map(calc);

}

solve(area, vol, [{ "x": "1", "y": "2", "z": "10" }, { "x": "7", "y": "7", "z": "10" }, { "x": "5", "y": "2", "z": "10" }]);
function solve( arg1, arg2, arg3) {
let stepsNum = Number(arg1);
let stepsMeter = Number(arg2);
let studentSpeed = Number(arg3);

let distanceMeters = stepsNum * stepsMeter;
let speedMetSec = studentSpeed / 3.6;
let time = distanceMeters / speedMetSec;
let rest = Math.floor(distanceMeters / 500);

let timeMin = Math.floor(time / 60);
let timeSec = Math.round(time - (timeMin * 60));
let timeHr = Math.floor(time / 3600);

console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec) 

}
solve(4000, 0.60, 5)
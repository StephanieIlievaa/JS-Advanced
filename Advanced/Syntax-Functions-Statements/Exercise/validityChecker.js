  function validityChecker(x1, y1, x2, y2) {
    let distance = (x1, y1, x2, y2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    let firstCheck = `{${x1}, ${y1}} to {0, 0} is `;
    let secondCheck = `{${x2}, ${y2}} to {0, 0} is `;
    let thirdCheck = `{${x1}, ${y1}} to {${x2}, ${y2}} is `;
    console.log(Number.isInteger(distance(x1, y1, 0, 0)) ? `${firstCheck}valid` : `${firstCheck}invalid`);
    console.log(Number.isInteger(distance(x2, y2, 0, 0)) ? `${secondCheck}valid` : `${secondCheck}invalid`);
    console.log(Number.isInteger(distance(x1, y1, x2, y2)) ? `${thirdCheck}valid` : `${thirdCheck}invalid`);
}
//function validityChecker([x1, y1, x2, y2]) {
    //[x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);

  //  function checkValidity(x1, y1, x2, y2) {
       //let deltaX = x2 - x1;
        //let deltaY = y2 - y1;
        //let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        //if(distance % 1 == 0) {
          //  console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        //} else {
         //   console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
       // }
    //}
  
  
  

    checkValidity(x1, y1, 0, 0);
    checkValidity(x2, y2, 0, 0);
    checkValidity(x1, y1, x2, y2);

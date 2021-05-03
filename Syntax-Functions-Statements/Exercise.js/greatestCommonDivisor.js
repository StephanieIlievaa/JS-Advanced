function solve(num1, num2) {
 //recursive solution 
 
   if (num2) {
       return solve(num2, num1 % num2);
   } else {
       return Math.abs(num1);
   }
}

console.log(solve(15, 5));
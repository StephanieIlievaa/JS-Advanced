function subtract() {
  const numOne = document.getElementById('firstNumber').value;
  const numTwo = document.getElementById('secondNumber').value;

const substr = Number(numOne) - Number(numTwo);
 
  document.getElementById('result').textContent = substr;

}
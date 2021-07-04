function sumTable() {
let products = document.querySelectorAll('table tr');
let totalSum = 0;
for(let i = 1; i < products.length; i++) {
    let cols =products[i].children;
    let cost = cols[cols.length - 1].textContent;
    totalSum += Number(cost);
}
document.getElementById('sum').textContent = totalSum;
}
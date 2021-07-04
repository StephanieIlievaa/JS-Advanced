function solve() {
   let addProductButtons = document.querySelectorAll('.add-product');
   let textAreaElement = document.querySelector('textarea');
   let checkoutButtonElement = document.querySelector('.checkout');
   let sum = 0;
   let products = [];

   for (const addProductButton of addProductButtons) {
      addProductButton.addEventListener('click', (e) => {
         e.currentProductElement = e.currentTarget.parentElement.parentElement;
         //we can search in a part of the DOM tree;
         let productName = currentProductElement.querySelector('.product.title').textContent;
         let productPrice = currentProductElement.querySelectorAll('.product-line-price');

         sum += productPrice;
         products.push(productName);
         textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the card.\n` ;

      });
   }
   checkoutButtonElement.addEventListener('click', (e) => {
      let uniqueProducts = products.reduce((a, x) =>{
         if (!a.includes(x)) {
            a.push(x);
         }
         return a;
      }, []);
      textAreaElement.textContent += `You bought ${uniqueProducts.join(', ')} for ${sum.toFixed(2)}.`;
   });
}
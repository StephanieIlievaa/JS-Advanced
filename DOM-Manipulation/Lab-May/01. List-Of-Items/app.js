function addItem() {
 //take the elements from the HTML
 let text = document.getElementById('newTextItem');
 let item = document.getElementById('items');

 //create new li element 
 let newLiElement = document.createElement('li');
 newLiElement.textContent = text.value;

 // append to DOM
item.appendChild(newLiElement);
text.value = '';
}
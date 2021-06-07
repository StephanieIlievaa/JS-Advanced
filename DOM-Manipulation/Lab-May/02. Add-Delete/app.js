function addItem() {
    //take the elements from the HTML
    let newItemTextElement = document.getElementById('newItemText');
    let itemsElement = document.getElementById('items');

    //create new li element 
    let liItemElement = document.createElement('li');
    liItemElement.textContent = newItemTextElement.value;

    // add delete button
    let deleteButton = document.createElement('a');
    deleteButton.setAttribute('href', '#');
    deleteButton.textContent = '[Delete]';

    // attach event to delete button
    deleteButton.addEventListener('click', (e) => {
        console.log('delete clicked');
        e.currentTarget.parentNode.remove();
    });

    liItemElement.appendChild(deleteButton);
    itemsElement.appendChild(liItemElement);

    newItemTextElement.value = '';

}
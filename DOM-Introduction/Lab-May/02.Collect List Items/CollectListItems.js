function extractText() {
    // getting the elements from DOM
    let itemNodes = document.querySelectorAll('ul#items li');
    let textArea = document.querySelector('#result');

    //iteration through the itemNodes
    for (let node of itemNodes) {
        textArea.value += node.textContent + '\n';
    }
}
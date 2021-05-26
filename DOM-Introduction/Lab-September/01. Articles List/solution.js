function createArticle() {
	// gettin element from DOM 
	let titleInputElement = document.getElementById('createTitle');
	let contentInputElement = document.getElementById('createContent');

//next step is to take the the input from the title and the content.
//our titleEl will be h3 element
//our contentEl will be paragraph
let headingElement = document.createElement('h3');
headingElement.innerHTML = titleInputElement.value;

let contentElement = document.createElement('p');
contentElement.innerHTML = contentInputElement.value;

//now we need to create our article element and section

let articleElement = document.createElement('article');
articleElement.appendChild(headingElement);
articleElement.appendChild(contentElement);

let articleSectionElement = document.getElementById('articles');
articleSectionElement.appendChild(articleElement);
}
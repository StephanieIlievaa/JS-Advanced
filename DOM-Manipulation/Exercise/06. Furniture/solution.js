function solve() {
    // [{ "name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/ grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price: 150, ::decFactor: 1.2"}]

    //1. Select DOM elements
    let textAreas = document.querySelectorAll('#exercise textarea');
    let generateTextarea = textAreas[0];
    let buyTextarea = textAreas[1];


    let buttons = document.querySelectorAll('#exercise button');
    let generateButton = buttons[0];
    let buyButton = buttons[1];

    //2.Add generate Button event listener
    generateButton.addEventListener('click', generateItems);

    function generateItems() {
        //2a.Get generate textarea value and JSON.parse
        let items = JSON.parse(generateTextarea.value);
        let tableBody = document.querySelector('.table tbody');

        //2b. Construct DOM elements representing table row to add to DOM table
        items.array.forEach(el => {
            let tr = document.createElement('tr');

            let imageTd = document.createElement('td');
            let image = document.createElement('img');
            image.src = el.img;
            imageTd.appendChild(image);

            let priceTd = document.createElement('td');
            let priceP = document.createElement('p');
            priceP = textContent = el.price;
            priceTd.appendChild(priceP);

            let nameTd = document.createElement('td');
            let nameP = document.createElement('p');
            nameP = textContent = el.name;
            nameTd.appendChild(nameP);

            let decFactorTd = document.createElement('td');
            let decFactorP = document.createElement('p');
            decFactorP = textContent = el.decFactor;
            decFactorTd.appendChild(decFactorP);


            let checkboxTd = document.createElement('td');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkboxTd.appendChild(checkbox);

            tr.appendChild(imageTd);
            tr.appendChild(nameTd);
            tr.appendChild(priceTd);
            tr.appendChild(decFactorTd);
            tr.appendChild(checkboxTd);

            tableBody.appendChild(tr);
        });
    }
    //3. Add buy event listener
    buyButton.addEventListener('click', calculateBoughtFurniture);

    function calculateBoughtFurniture() {
        //3a. Get all rows that are selected from table
        let tableRows = Array.from(document.querySelectorAll('.table tbody tr'));
        let selectedRows = tableRows.filter(row => row.querySelectorAll('input:checked').length > 0);

        //3b. Calculate bought item name, total price and average decor factor
        //map => for every <td> give me <p> element
        let names = selectedRows
            .map(row.querySelector('td:nth-of-type(2) p'))
            .map(x => x.textContent)


        let prices = selectedRows
            .map(row.querySelector('td:nth-of-type(3) p'))
            .map(x => Number(x.textContent))
            .join(', ');

        let decFactors = selectedRows
            .map(row.querySelector('td:nth-of-type(4) p'))
            .map(x => Number(x.textContent))

        let totalPrice = prices.reduce((acc, el) => acc + el, 0).toFixed(2);
        let averageDecFactor = decFactors.reduce((acc, el) => acc + el, 0) / decFactors.length;

        let furnitureText = `Bought furniture: ${names}`;
        let priceText = `Total price: ${totalPrice}`;
        let decFactorText = `Average decoration factor: ${averageDecFactor}`;

        buyTextarea.textContent = `${furnitureText}\n${priceText}\n${decFactorText}`;
    }
}


// function solve() {
 
//     //TODO...
//     let generateBtn = document.getElementsByTagName('button')[0];
//     generateBtn.addEventListener('click',onClickGenerate);
   
//     let buyBtn = document.getElementsByTagName('button')[1];
//     buyBtn.addEventListener('click',onClickBuy);
   
//     function onClickGenerate(event) {
//       let input = document.getElementsByTagName('textarea')[0].value;
//       let arr = JSON.parse(input);
//       let table = document.querySelector('.table tbody');
   
//       for (const obj of arr) {
//         let newTr = document.createElement('tr');
//         table.appendChild(newTr);
   
//         let img = document.createElement('td');
//         img.innerHTML = '<img src ="' + obj.img + '"/>';
//         newTr.appendChild(img);
   
//         let name = document.createElement('td');
//         name.textContent = `${obj.name}`;
//         newTr.appendChild(name);
   
//         let price = document.createElement('td');
//         price.textContent = `${obj.price}`;
//         newTr.appendChild(price);
        
//         let decFactor = document.createElement('td');
//         decFactor.textContent = `${obj.decFactor}`;
//         newTr.appendChild(decFactor);
   
//         let mark = document.createElement('td');
//         mark.innerHTML = '<input type="checkbox" />';
//         newTr.appendChild(mark);
//       }
//     }
   
//     function onClickBuy(event) {
//       let checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
   
//       let names = [];
//       let totalPrice = 0;
//       let avgDecFactor = 0;
   
//       for (const box of checkboxes) {
//         let parent = box.parentNode.parentNode.getElementsByTagName('td');
   
//         if (box.checked === true) {
//           let name = parent[1].textContent;
//           let price = Number(parent[2].textContent);
//           let decFactor = Number(parent[3].textContent);
   
//           names.push(name);
//           totalPrice += price;
//           avgDecFactor += decFactor;
//         }
//       }
   
//       let result = `Bought furniture: ${names.join(', ')}\n`;
   
//       result += `Total price: ${totalPrice.toFixed(2)}\n`;
   
//       avgDecFactor /= names.length;
   
//       result += `Average decoration factor: ${avgDecFactor}`;
   
//       let ouput = document.getElementsByTagName('textarea')[1];
   
//       ouput.textContent = result;
   
//     }
//   }


// function solve() {

//     const [furnitureArea, buyArea] = Array.from(document.querySelectorAll('textarea'))
//     const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'))
//     const tbody = document.querySelector('tbody')
//     generateBtn.addEventListener('click', addFurniture)
//     buyBtn.addEventListener('click', buyAll)
  
//     function addFurniture() {
//       JSON.parse(furnitureArea.value).forEach(f => {
//         let furnitureStructure = `
//           <tr>
//            <td><img src="${f.img}"></td>
//            <td><p>${f.name}</p></td> 
//            <td><p>${f.price}</p></td>
//            <td><p>${f.decFactor}</p></td>
//            <td><input type="checkbox"/></td>
//           </tr>`
  
//         tbody.insertAdjacentHTML(`beforeend`, furnitureStructure)
//       });
//     }
  
//     function buyAll() {
//       const furniture = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
//         .map(input => input.parentNode.parentNode)
  
//       const result = {
//         name: [],
//         totalPrice: 0,
//         decFactor: 0
//       }
  
//       for (let row of furniture) {
//         const cells = row.children
  
//         const name = cells[1].children[0].textContent
//         result.name.push(name)
  
//         const price = Number(cells[2].children[0].textContent)
//         result.totalPrice += price
  
//         const factor = Number(cells[3].children[0].textContent)
//         result.decFactor += factor
//       }
  
//       buyArea.value = `Bought furniture: ${result.name.join(', ')}\nTotal price: ${result.totalPrice.toFixed(2)}\nAverage decoration factor: ${result.decFactor / furniture.length}`
//     }
//   }
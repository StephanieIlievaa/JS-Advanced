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
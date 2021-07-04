function solve() {

    let button = document.querySelector('button').addEventListener('click', onClick)
    let option2 = document.querySelector('#selectMenuTo');

    let val1 = document.createElement('option')
    val1.textContent = 'Binary';
    val1.value = 'binary';
    let val2 = document.createElement('option')
    val2.textContent = 'Hexadeicmal';
    val2.value = 'hexadeicmal';
    option2.appendChild(val2);
    option2.appendChild(val1);

    function onClick() {
        let input = Number(document.getElementById('input').value);
        

        if (option2.value === 'binary') {
            document.querySelector('footer input').value = input.toString(2);
        } else {
            document.querySelector('footer input').value = input.toString(16).toUpperCase();

        }

    }
}

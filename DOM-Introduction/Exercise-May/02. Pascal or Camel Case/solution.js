function solve() {

    let text = document.getElementById('input').value.split('.').map(e => e.trim()).filter(e => e !== '');
    const n = 3
    const result = new Array(Math.ceil(text.length / n))
        .fill()
        .map(_ => text.splice(0, n))

    const output = document.getElementById('output');
    result.forEach(e => {
        let text = e.reduce((acc, e) => acc +`${e}.`, '');
        createAppendParagraph(document.createTextNode(text))
    });


    function createAppendParagraph(text) {
        let p = document.createElement('p');
        p.appendChild(text)
        output.appendChild(p)
    }

}

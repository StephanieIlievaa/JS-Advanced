 
 //global scope - closure
 function endGame() {
    let avengers = [
        'Iron Man',
        'Captain America',
        'Thor',
    ]
    // 
    function asemble(avengers) {
        let enemy = 'Thanos';
        console.log(`Avengers, asemble!`);
        console.log(avengers.join(', '));
        console.log(`Lets kill ${enemy}`);
    }
    asemble(avengers);
}
endGame();

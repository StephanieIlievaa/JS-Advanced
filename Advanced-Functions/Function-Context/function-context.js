// 1st example
//function declaration
//run into browser
function fly() {
    console.log('flying');
}

let hero = {
    name: 'Superman',
    fly: fly
}
//function invokation
//the context here is in the global object - Window
fly();
// the context here of our function is the object hero 
hero.fly();


//2nd example -> three ways to assing function to object again 
function fly() {
    console.log(this);
}
let hero = {
    name: 'Superman',
    fly: fly,
    //the context is hero 
    //declare
    laserEyes: function() {
        console.log(this.name + ' - Shoot lasers');
        console.log(this);
    },
    //object method notation
    //we can declare this way too 
    stopBullets() {
    },
    //valid sintax to assing function to object again 
    // arrow function is getting the context from the window, not from the parent
    punch: () => {
console.log(this);
console.log('Punch');
    }
}

// the context is hero
hero.laserEyes();
//here we take the function from it`s refferention and exeecute it after
//global context - Window
let shootLasers = hero.laserEyes;
shootLasers();
hero.punch();

//3rd example change function context
function fly(info) {
    console.log(`${this.name} is flying! ${info}`);
}

let contextObject = {
    name: 'Wonder woman'
};
fly('with cape'); // global context
fly.call(contextObject, ); 
fly.call({name: 'Stef'});// we also inline can change the context
fly.apply({name: 'Gosho'}); //no difference in this situation with call()

// the difference between call() and apply()

fly.call( contextObject, 'With rope'); // passing the argument one by one as string


fly.apply({name: Gosho}, ['With Fork']); // passing the every next argument as array


//Example using bind()
// with bind we create function and change the context without execute it straight away
//to execute it we need to call it 
let wonderWomanFly = fly.bind(contextObject); // using the function fly()
wonderWomanFly('with plane');
wonderWomanFly('with helicopter')
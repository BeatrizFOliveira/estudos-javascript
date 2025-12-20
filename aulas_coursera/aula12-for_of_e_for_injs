//NESSE EXERCÍCIO É POSSÍVEL VER A APLICAÇÃO DE FOR OF E FOR IN

// Task 1 - Aplicação do for of em um array
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy(){
    for (let item of dairy) {
        console.log(item);
    }
}

logDairy()

// Task 2 - Aplicação do for of em um objeto
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (const key of Object.keys(bird)) {
        console.log(key + ': ' + bird[key]);
    }
}

birdCan();

// Task 3 - Aplicação do for in em um objeto
function animalCan() {
    for (const key in bird) {
        console.log(key + ': ' + bird[key]);
    }
}

animalCan();
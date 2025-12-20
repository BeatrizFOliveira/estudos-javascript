var nome; //para declarar qualquer variável usamos o 'var' independente do tipo.
nome = 'Carla';
var sobrenome;
sobrenome = 'Carvalho';
var ultimo_nome = 'Correia';

console.log(nome, sobrenome, ultimo_nome);

var idade = 24;
console.log(idade);

idade = 'vinte e quatro';
console.log(idade);

//observe que uma mesma variável pode receber diferentes tipos de números.


var petDog = 'Rex';
var petCat = 'Pepper';

console.log(petDog);
console.log(petCat);

console.log("My pet dog's name is", petDog);
console.log("My pet cat's name is", petCat);

var catSound = 'purr';
var dogSound = 'woof';

console.log(petDog, 'says', dogSound);
console.log(petCat, 'says', catSound);

catSound = 'meow';

console.log(petCat, 'now says', catSound);

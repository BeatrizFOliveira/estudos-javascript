//Em JS os tipos de dados primitivos são:

//Number
/*Permite armazenas números com ponto flutuante entre 2^-1074 e 2^1024, mas só consegue armazenar com
segurança entre -(2^53 − 1) e 2^53 − 1*/
console.log(typeof 123);
console.log(typeof 12.3);

//String
console.log(typeof "Palavra");

//Boolean
console.log(typeof true);
console.log(typeof false);

//BigInt
/*Criar números inteiros com precisão, garantindo que as operações sejam precisas com número fora da área de segurança.
Para isso usa-se o n no final do número.*/
console.log(typeof 9007199254740991n);

//Null
console.log(typeof null);

//Undefined
//Diz respeito a uma variável que ainda não tem valor.
var variavel;
console.log(typeof variavel);

//Symbol
//Cria um valor primitivo único e imutável.
console.log(typeof Symbol())

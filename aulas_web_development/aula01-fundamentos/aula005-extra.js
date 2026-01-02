//HOISTING - é a possíbilidade de trabalhar com uma variável sem declará-la (funciona apenas com var).

console.log('a = ', a);
var a = 2;
console.log('a = ', a);

//OBJETO VS. FUNÇÃO---------------------------------
//Todo objeto é criado a partir de uma função

console.log(typeof Object)  //Todo objeto é uma função
console.log(typeof new Object) //Para criar um objeto basta usar o new

const Cliente = function(){} //Toda função é uma função
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto{} //Toda classe é uma função
console.log(typeof Produto)
console.log(typeof new Produto)

//PAR NOME E VALOR---------------------------------

const nome = 'valor'

function exec(){
    const nome = 'VaLoR'
    return nome
}
//Objetos são grupos aninhados de pares nome/valor
const cliente ={
    nome: 'Pedro',
    idade: 32,
    peso: 90
}

//NOTAÇÃO DE PONTO--------------------------------------

console.log(Math.ceil(6.4)) //Acessa a função ceil dentro de Math

const obj1 = {}
obj1.nome = 'Bola' //cria um atributo nome dentro de um objeto

function Obj(nome){
    this.nome = nome; //Cria um atributo público usando o this.
    this.funcao = function(){ //Cria uma função pública usando o this.
        console.log('Exemplo...')
    }
}

const obj2 = new Obj('Cadeira')
console.log(obj2.nome) //Acessa um atributo de um objeto

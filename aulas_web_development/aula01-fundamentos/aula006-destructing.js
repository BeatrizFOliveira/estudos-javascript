//OPERADORES DE ATRIBUIÇÃO---------------------------------

let a = 7
a += 3
a -= 1
a *= 5
a /= 10
a %= 2

//OPERADORES DESTRUCTURING (ES 2015)--------------------------
//Tira elementos de uma estrutura

//Operador destructing em OBJETO
const pessoa = {
    nome: 'Ana',
    idade: 5
}

const {nome, idade} = pessoa //As chaves representam o operador destruct, que está estraindo nome e idade
console.log(nome, idade)

const {nome: n} = pessoa //Extrai o nome usando o apelido n
console.log(n)

//Operador destructing em ARRAY
const [b] = [10] //Os colchetes representam o destruct, que está puxando o primeiro elemento de um array que nesse caso é o 10
console.log(b)

const [n1, ,n3, , n5, n6 = 0] = [10,7,9,8] //Extrai os elementos 1, 3, 5 e cria o elemento 6, para não puxar um elemento basta deixar em branco.
console.log(n1, n3, n5, n6)

const [ ,[ ,nota]] = [[1,2,3], [4,5,6]]
console.log(nota)

//Operador destructing com FUNÇÃO e OBJETO

function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max-min) + min
    return valor
}

const obj3 = {min: 40, max: 50}
console.log(rand(obj3)) //É possível definir um objeto para depois chamar a função
console.log(rand({min: 955})) //Ou estabelecer os parâmetros de um objeto sem definí-lo

//Operador destructing com FUNÇÃO e ARRAY

function rand2([min = 0, max = 1000]){
    const valor = Math.random() * (max-min) + min
    return valor
}

console.log(rand2([40,50])) //Destruct em uma função sem declarar um array
console.log(rand2([ , 10]))

const lista = [5,10] 
console.log(rand2(lista)) //Destruct em uma função declarando o array






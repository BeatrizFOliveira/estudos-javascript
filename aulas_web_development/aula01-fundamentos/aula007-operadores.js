//OPERADORES ARITMÉTICOS-----------------------------------
const [a,b,c,d] = [3,5,1,15]

const soma = a + b
const sub = a - b
const mult = a*b
const div = a/b
const modulo = a%2
const exp = a**b

//OPERADORES RELACIONAIS-----------------------------------

console.log('1' == 1)
console.log('1' === 1)
console.log('3' != 3)
console.log('3' !== 3)
console.log(3 < 2)
console.log(3 > 2)
console.log(3 <= 3)
console.log(4 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log(d1 == d2) //Nesse caso é falso pois ele compara o local da memória
console.log(d1.getTime() == d2.getTime()) //Nesse caso é verdadeiro pois irá comparar o valor das datas

console.log(undefined == null)
console.log(undefined === null)

//OPERADORES LÓGICOS---------------------------------------

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log(compras(true, true))

//OPERADORES UNÁRIOS----------------------------------------

let num1 = 1
let num2 = 2

num1++
num2--

//O sinal na frente do número tem precedência sobre o sinal atrás do número
--num1
++num2

//OPERADORES TERNÁRIOS--------------------------------------

//O operador ternário possui três elementos: uma expressão seguido de ponto de interrogação, o resultado caso verdadeiro, dois pontos e o resultado caso falso.

const nota = 9
const resultado = nota >= 7 ? 'aprovado' : 'reprovado'

console.log(resultado)





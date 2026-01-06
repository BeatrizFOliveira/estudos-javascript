//É possível criar uma função que não necessita de parâmetros dentro do parênteses, mas que pode receber e usar os parâmetros passados.
//O argument é um array formado por todos os parâmetros passados.
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(2,6,8))
console.log(soma('a', 'b', 'c'))

//É possível criar um parâmetro com valor padrão
function soma3(a = 1, b = 1, c = 1){
    return a+b+c
}
console.log(soma3())
console.log(soma3(2,3))

//Éssa é outra forma de colocar um valor padrão, caso o JS seja antigo
// function soma3(a = 1, b = 1, c = 1){
//     a = a || 1
//     b = b || 1
//     c = c || 1
//     return a+b+c
// }
// console.log(soma3())
// console.log(soma3(2,3))
 
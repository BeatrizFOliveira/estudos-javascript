// Toda função retorna algo se não tiver nada para retornar ela irá retornar undefined

function fun1(){ } //Criando uma função


//Armazenando uma função como uma variável, nesse caso uma função anônima
const fun2 = function () { }


//Armazenando uma função como valores de um array
const lista = [function (a,b) {return a+b}, fun1, fun2]
console.log(lista[0](2,3)) //Como executar a função


//Armazenando uma função em um atributo de um objeto
const obj = {}
obj.falar = function () {return 'Ola'}
console.log(obj.falar()) //Como executar a função


//Passar função como parâmetro de outra função
function run(fun){
    fun()
}
run(function(){console.log('executando...')})


//Retornando e conter uma função dentro de uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4) //como executar a função
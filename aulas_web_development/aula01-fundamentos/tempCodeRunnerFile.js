function rand2([min = 0, max = 1000]){
    const valor = Math.random() * (max-min) + min
    return valor
}

console.log(rand2([40,50]))
console.log(rand2([ , 10]))
const lista = [5,10]
console.log(rand2(lista))

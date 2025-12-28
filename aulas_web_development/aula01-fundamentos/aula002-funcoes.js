
//FUNÇÃO SEM RETORNO--------------------------------------------------
function imprimirSoma(a, b){
    console.log(a+b);
}

imprimirSoma(1,2);
imprimirSoma(2); //comportamentos estranhos do js
imprimirSoma(1,2,3,4,5); //comportamentos estranhos do js


//FUNÇÃO COM RETORNO--------------------------------------------------
function soma(a, b=0){ //b é colocado como valor padrão caso seja passado apenas o a
    return a+b;
}

console.log(soma(1,3));
console.log(soma(1));


//ARMAZENANDO UMA FUNÇÃO EM UMA VARIÁVEL--------------------------------------------------
const imprimirSoma2 = function (a,b){  //É possível criar uma função anônima apenas não colocando nome
    console.log(a+b);
}


//ARMAZENANDO UMA FUNÇÃO ARROW EM UMA VARIÁVEL--------------------------------------------------
const soma2 = (a,b) => { //A seta indica que é uma função
    return a+b;
}
console.log(soma2(2,3));


//RETORNO IMPLÍCITO--------------------------------------------------
const subtracao = (a,b) => a-b; //Quando não tem chave significa que ela tem apenas uma única sentença de código, nesse caso o retorno de forma implícita.
console.log(subtracao(2,3));

//FUNÇÃO SIMPLIFICADA--------------------------------------------------
const imprimir2 = a => console.log(a);
imprimir2(`Legal`)
//TIPOS DE DECLARAÇÃO DE FUNÇÕES


//FUNCTION DECLARATION
function soma(x,y){ //esse tipo de função é carregada antes da execução do código, o que permite chamar a função antes de defini-la
    return x + y;
}

//FUNCTION EXPRESSION
const sub = function (x,y){//nesse caso a função é anônima
    return x - y;
}

//NAMED FUNCTION EXPRESSION
const mult = function mult(x,y){
    return x*y
}

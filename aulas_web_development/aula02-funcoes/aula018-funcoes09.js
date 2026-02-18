//FUNÇÃO FACTORY
//É uma função que retorna um objeto, assim ela pode ser usada para construir objetos que terão estruturas iguais.


//EXEMPLO 1
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())


//EXEMPLO 2
function criarProduto(nome, preco){
    return {
        nome, //não precisa por dois pontos, pois já foi passado como parâmetro
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Mouse', 160.00))

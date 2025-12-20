/*Ao trabalhar com erros podemos usar o try rodar parte do código e verificar se há erros.
Podemos usar também o catch para capturar o erro em uma variável. E podemos usar o throw para
exibir um erro específico na tela.*/


//---------------------EXERCÍCIO 1---------------------
function somarNumeros(a, b){
    try{
        if(typeof(a) != Number){
            throw new ReferenceError('O primeiro parametro nao e um numero');
        }
        else if(typeof(b) != Number){
            throw new ReferenceError('O segundo parametro nao e um numero');
        }
        else{
            console.log(a+b);
        }
    }catch(erro){
        console.log('Erro:', erro);
        
    }
}

somarNumeros('5', 7);
console.log('Programa ainda rodando apesar do erro.');

//---------------------EXERCÍCIO 1---------------------

function buscador(palavra, match){
    var condicao1 = typeof(palavra) == 'string' && palavra.length >= 2;
    var condicao2 = typeof(match) == 'string' && match.length == 1;
    if(condicao1 == true && condicao2 == true){
        for(var i = 0; i < palavra.length; i++){
            if(match === palavra[i]){
                console.log('Achado o', match, 'na posicao', i);
            }
            else{
                console.log('Não foi encontrado correspondente na posicao', i);
            }
        }
    }
    else
        console.log('Parametros inadequados para a funcao.');
    
}

buscador('gato', 'g');
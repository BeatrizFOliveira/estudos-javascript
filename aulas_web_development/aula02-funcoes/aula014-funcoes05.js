//Funções do tipo CALLBACK
//É quando uma função é passada como argumento para outra função e executada após a conclusão de uma tarefa

const fabricante = ['Volks', 'Fiat', 'Toyotta'];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

fabricante.forEach(imprimir); //Para cada valor do array a função imprimir é chamada de volta (callback)




const notas = [7.8, 6.3, 9.0, 5.4, 8.8, 3.2, 7.3];

//Sem função CALLBACK
const notasBaixas1 = [];
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i]);
    }
}
console.log(notasBaixas1);

//Com função CALLBACK
const notasBaixas2 = notas.filter(function(nota){ //A função filter insere valores que atendem a uma determinada condição
    return nota < 7;
});
console.log(notasBaixas2);

//Outra variação usando Callback e Arrow function
const notasBaixas3 = notas.filter(nota => nota < 7);
console.log(notasBaixas3)



//Exemplo de CALLBACK para browser
document.getElementsByTagName('body')[0].onclick = functio(evento){ //A função é chamada quando há um click no body
    console.log('O evente aconteceu.');
}



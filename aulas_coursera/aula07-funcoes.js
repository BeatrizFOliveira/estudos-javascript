function buscador(palavra, match){
    for(var i = 0; i < palavra.length; i++){
        if(match === palavra[i]){
            console.log('Achado o', match, 'na posicao', i);
        }
        else{
            console.log('Não foi encontrado correspondente na posicao', i);
        }
    }
}

buscador('teste', 't');
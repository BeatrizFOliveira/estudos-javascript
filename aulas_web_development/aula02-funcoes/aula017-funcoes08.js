//CLOSURE
//É o escopo criado quando uma função é declarada.
//Esse escopo permite a função acessar e manipular variáveis externas à função.

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) //Irá retornar 'Local' pois a função 'dentro' está declarada no mesmo local que 'Local'

//Uma função consegue acessar qualquer variável que está no mesmo bloco que ela.
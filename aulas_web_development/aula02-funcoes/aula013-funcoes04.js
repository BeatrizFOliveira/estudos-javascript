//FUNÇÕES ARROW ---------------------------------------

let dobro = function(a){ //Função normal
    return 2*a
}

dobro = (a) => { //Função arrow
    return 2*a
}

dobro = a => 2*a  //Função arrow simplificada


// Exemplo 2
let ola = function(){
    return 'ola'
}
ola = () => 'ola'

//USANDO A FUNÇÃO ARROW PARA EVITAR QUE O THIS VARIE
function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa

//A função arrow aponta para o módulo.exports por isso ele não varia como em uma função normal. E não é possível mudar a referência do this usando o bind()
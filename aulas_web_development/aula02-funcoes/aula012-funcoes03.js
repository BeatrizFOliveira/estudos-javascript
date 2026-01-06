//FUNÇÕES COM  THIS--------------------------
const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

//VAI DAR ERRO POIS HÁ UM CONFLITO ENTRE PARADIGMAS: FUNCIONAL E OO
// pessoa.falar()
// const falar = pessoa.falar
// falar()

const falarDePessoa = pessoa.falar.bind(pessoa) //A função bind garante que o 'this' aponta para o objeto pessoa
falarDePessoa()


function Cliente(){
    this.idade = 0

    setInterval(function(){ //O setInterval funciona como um loop, repetindo algo em uma frequência, nesse caso 1000 milisegundos
        this.idade++
        console.log(this.idade)
    }.bind(), 1000)
}
new Cliente

//ESSA É OUTRA FORMA DE DEIXAR O THIS FIXO SEM USAR BIND()
// const self = this
// function Cliente(){
//     self.idade = 0

//     setInterval(function(){
//         self.idade++
//         console.log(self.idade)
//     }, 1000)
// }
// new Cliente


function funcaoErro(erro){
    //throw new Error('erro detectado...')
    //throw console.log('ERRO')
    throw{        // O throw é a função que joga algo na tela, o que pode ser uma mensagem impressa, um valor booleano, ... ou até um objeto como nesse caso
        nome: erro.name,
        msg: erro.menssage,
        date: new Date
    }
}

try {   //A função TRY tem o objetivo de tentar rodar um código, se não conseguir vai para o catch
    const x = 1
    x = 0
}
catch (e){ //O catch pode ou não capturar o erro através do parênteses e dentro dele é especificado o que irá acontecer no caso do try não ter dado certo
    funcaoErro(e) //Nesse caso o catch chamou uma função
}
finally{    //O finally é uma função que sempre será executada independente do try funcionar ou não
    console.log('passou por aqui')
}
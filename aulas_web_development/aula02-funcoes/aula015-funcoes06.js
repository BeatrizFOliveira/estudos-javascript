//FUNÇÕES CONSTRUTORAS
//Funciona de forma praticamente identica a classes

function Carro(velocidadeMax = 200, delta = 5){
    let velocidadeAtual = 0;

    //MÉTODO PÚBLIC
    this.acelerar = function(){ //usa-se o this para tornar o acelerar público e assim poder chamar fora da função carro
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta;
        }
        else{
            velocidadeAtual = velocidadeMax;
        }
    }

    //MÉTODO PÚBLIC
    this.getVelocidadeAtual = function(){
        return velocidadeAtual;
    }
}

const uno = new Carro; //É possível criar um objeto a partir de uma função
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual())
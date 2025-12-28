//A variável var tem escopo global e escopo de função.
//VARIÁVEL VAR GLOBAL----------------------------------------
{
    {
        var x = 'Variavel global';
    }
}
console.log(x + ' eh visivel'); //Ela é acessível pois as chaves não são funções, logo não é um escopo de função, mas global.

//VARIÁVEL VAR ESCOPO DE FUNÇÃO----------------------------------------
function exemplo(){
    var y = 123;
}
console.log(y); //Não é possível acessar variáveis declaradas dentro de funções (ESCOPO DE FUNÇÃO).


//VARIÁVEL VAR MUTABILIDADE----------------------------------
//Como não há função o valor de numero muda para 2.
var numero = 1;
{
    var numero = 2;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);

//Como há uma função os valores de n são tratados como variáveis diferentes uma global e uma de função, não mudando o valor.
var n = 1;
function exemplo1(){
    var n = 2;
    console.log('Local =', n);
}
exemplo1();
console.log('Global =',n);



//VARIÁVEL LET------------------------------------------
//Tem escopo local, de função e de bloco

//DE BLOCO
var n = 5;
{
    let n = 7;
    console.log('dentro = ', n);
}
console.log('fora =', n);
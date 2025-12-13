//--------------EXERCÍCIO 1-----------------

var age = 10;

if(age >= 65){
    console.log('Idoso');
}
else if(age >= 18){
    console.log('Adulto');
}
else if(age >= 13)
    console.log('Adolescente');
else
    console.log('Crianca');

//--------------EXERCÍCIO 2-----------------

var dia = "Domingo";

switch(dia){
    case 'Segunda':
        console.log('Boa segunda-feira!');
        break;
    case 'Terca':
        console.log('Boa terca-feira!');
        break;
    case 'Quarta':
        console.log('Boa quarta-feira!');
        break;
    case 'Quinta':
        console.log('Boa quinta-feira!');
        break;
    case 'Sexta':
        console.log('Boa sexta-feira!');
        break;
    case 'Sabado':
        console.log('Bom sabado!');
        break;
    case 'Domingo':
        console.log('Bom domingo!');
        break;
    default:
        console.log('Nao existe esse dia da semana.');
}
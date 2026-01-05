//SWITCH-------------------------------------------
let nota_prova = 10

switch(nota_prova){
    case 10: 
    case 9:
        console.log('Quadro de honra')
        break
    case 8: case 7: case 6:
        console.log('Aprovado')
        break
    case 5: case 4: case 3:
        console.log('Recuperação')
        break
    default:
        console.log('Reprovado')
}


//CONDICIONAL WHILE--------------------------------

let contador = 1
while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador++
}

//CONDICIONAL DO WHILE-----------------------------
do{
    console.log(`contador = ${contador}`)
    contador++
} while(contador <= 10)


//CONDICIONAL FOR----------------------------------
for(let i = 1; i<=10; i++){
    console.log('i = ', i)
}

const notas = [1, 4, 7, 6, 10]
for(i=0; i < notas.length; i++){
    console.log('nota = ', i)
}

//CONDICIONAL FOR IN-------------------------------

//FOR IN em arrays
const nota = [10, 8.4, 9.2]
for(let i in nota){
    console.log('Nota', i, nota[i])
}

//FOR IN em objetos
const pessoa = {
    nome: 'ana',
    sbrenome: 'silva',
    idade: 16
}

for (let atributo in pessoa){
    console.log(atributo, ' = ', pessoa[atributo])
}

//BREAK E CONTINUE----------------------------------
const num = [0,1,2,3,4,5,6,7,8,9]

for(x in num){
    if(x==5){
        break //usado com while, do while, for e switch
    }
    console.log(x)
}

for(y in num){
    if(y==5){
        continue //usado com while, do while, for
    }
    console.log(y)
}

//RÓTULOS-------------------------------------------

externo: //O rótulo é uma palavra seguida dos dois pontos sendo usada com break ou continue
for (a in num){
    for(b in num){
        if(a == 2 && b == 3){
            break externo //Nesse caso usamos o rótulo para quebrar um loop externo já que sem ele seria quebrado o loop interno
        }
        console.log(a, b)
    }
}
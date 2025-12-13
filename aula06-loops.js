//-----------------EXERCÍCIO 1-------------------
for(var i=1; i<=10; i++){ //Observe que é possível declarar a variável dentro do for
    if(i==1)
        console.log('Medalha de outro')
    else if(i==2)
        console.log('Medalha de prata')
    else if(i==3)
        console.log('Medalha de bronze')
    else
        console.log(i)
}

console.log('\n')

//-----------------EXERCÍCIO 2-------------------
for(var i=1; i<=10; i++){
    switch(i){
        case 1:
            console.log('Medalha de outro')
            break;
        case 2:
            console.log('Medalha de prata')
            break;
        case 3:
            console.log('Medalha de bronze')
            break;
        default:
            console.log(i)
    }
}

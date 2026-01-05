externo: for (a in num){
    for(b in num){
        if(a == 2 && b == 3){
            break externo
        }
        console.log(a, b)
    }
}
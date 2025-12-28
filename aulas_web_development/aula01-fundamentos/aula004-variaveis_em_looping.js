//Como var não possui escopo de bloco, não fica salvo o valor de i, imprimindo apenas o valor final.
const func1 = [];

for(var i = 0; i < 10; i++){
    func1.push(function(){console.log(i);});
}

func1[2]();
func1[8]();

//Como let possui escopo de bloco, o valor de j fica salvo, imprimindo corretamente.
const func2 = [];

for(let j = 0; j < 10; j++){
    func2.push(function(){console.log(j);});
}

func2[2]();
func2[8]();
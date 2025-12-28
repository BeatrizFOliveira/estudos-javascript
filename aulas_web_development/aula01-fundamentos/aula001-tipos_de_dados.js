//=============================BÁSICO DO JAVA SCRIPT=================================

/*
C
O
M
E
N
T
Á
R
I
O */

//COMENTÁRIO

//VARIÁVEIS
var x=4; //pode ser declarada várias vezes e receber diferentes atribuições.
let y=3; //não pode ser declarada várias vezes, mas pode receber diferentes atribuições.
const z=2; //não pode ser declarada mais de uma vez e não pode receber diferentes atribuitos.

//ESTRUTURA DE DADOS

//--------------NUMBER---------------
const a = 1;
const b = 3;

console.log((a/b).toFixed(5)); //Determina a quantidade de casas
console.log(b.toString(2)); //Transforma o número em binário
console.log(0.1+0.7) //CUIDADO, pois números flutuantes geram imprecisões
console.log(7/0); //Não gera erro, mas infinito

//--------------STRING-----------------
const palavra = 'Texto de teste'

console.log(palavra.charAt(4)); //Encontra o caractere na posição 4.
console.log(palavra.charCodeAt(4)); //Encontra o código em unicode do caractere na posição 4.
console.log(palavra.indexOf(111)); //Encontra o caractere com o código 111.
console.log(palavra.substring(0,3)); //Cria uma substring com os caracteres das posições 0 a 3.
console.log('Aqui: '.concat(palavra).concat('!')); //Método que concatena strings.
console.log('Aqui: '+palavra+'!'); //Concatenação com +.
console.log(palavra.replace('o','p')); //Troca a primeira letra 'o' pela letra 'p'.
console.log(palavra.split(' ')); //Transforma uma string em um array separando os elementos através de algum parâmetro.

//--------------TEMPLATE STRING-----------------
//Permite quebrar linha dentro de uma string, inserir variáveis e expressões numéricas com ${}

exemplo = 'Ana'
console.log(`Olá
    ${exemplo}!`);

console.log(`2 * 2 = ${2*2}`);

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('Cuidado')}`); //também permite inserir funções.

//--------------BOOLEAN-----------------
//Os valores de boolen são true ou false, mas ele também pode ser determinado com alguns elementos específicos.

let verdadeiro = true;
let falso = false;

verdadeiro = 1;
console.log(!!verdadeiro);
console.log(!verdadeiro);

//Elementos que retornam verdadeiro
console.log(!!3); //Números positivos
console.log(!!-1); //Números negativos
console.log(!!' '); //Espaços em branco
console.log(!![]); //Array vazio
console.log(!!{}); //Objeto vazio
console.log(!!Infinity); //Infinito

//Elementos que retornam falso
console.log(!!0) //Zero
console.log(!!'') //String vazia
console.log(!!null) //Null
console.log(!!NaN) //Not a number
console.log(!!undefined) //Indefinido

//------------------ARRAY----------------------
//O array é heterogêneo e não tem tamanho fixo.

const lista = [7.7, 8.9, 9, 9.2];
console.log(lista[0], lista[3]);
console.log(lista[4]); //Um index que não existe não dá erro, mas indefinido

lista[10] = 4.5;
console.log(lista); //É possível imprimir uma lista faltando elementos
console.log(lista.length); //Tamanho do array

//INSERIR ELEMENTO NO ARRAY
lista.push({id: 3}, false, null, 'teste');
console.log(lista);

//DELETAR ÚLTIMO ELEMENTO DO ARRAY
lista.pop()
console.log(lista);

//DELETAR ELEMENTO DO ARRAY
delete lista[1];
console.log(lista);

//------------------OBJECT----------------------
//É um grupo de pares chave-valor.

//Os parâmetros do objeto podem ser inseridos com . ou com [].
const objeto = {}

objeto.nome = 'Nome do objeto';
objeto.numero = 'Número do objeto';
objeto.preco = 'R$ 80,00';
objeto['Endereco'] = 'Rua das flores'; //É possível criar valores assim também.

console.log(objeto);


//Os parâmetros do objeto podem ser inseridos na criação do objeto.
const objeto2 = {
    nome: 'Nome do objeto',
    numero: 'Número do objeto',
    preco: 'R$ 100,00',
    endereco: 'Rua dos passaros'
}

console.log(objeto2);

//-------------------NULL e UNDEFINED---------------------
let valor;
console.log(valor); //Variável não iniciada por isso é undefined

valor = null; //ausência de valor (não aponta para nenhum objeto na memória)
console.log(valor);

const exemplo2 = {};
console.log(exemplo2.preco); //O resultado será undefined pois o preco foi definido, mas não inicializado

exemplo2.preco = null //Não possui preço.
console.log(exemplo2);


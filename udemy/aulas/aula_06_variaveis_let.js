
//variavel inicializada

/*
    variaveis são onjetos onde você guarda valores dentro dele
    cada variavel pode suportar apenas um valor por vez 
    e pode ser utilizado a qualquer momento
*/

let nome_01 = "João";

console.log(`seja bem vindo ${nome_01}`)
console.log(`você se chama ${nome_01}`)
console.log(`existe o nome ${nome_01}`)

//variavel não incializada

let nome_02;

nome_02 = 'Mateus';

console.log(nome_02);

nome_02 = 'Thaíssa'

console.log(nome_02);

/*
    é possivel modificar o valor da variavel como no exemplo acima
*/

/*
    Diferença entre variaveis inicializadas e não inicializadas

    inicializadas: onde ao criar você atribui algum valor a ela

    não inicializadas: não possui valor quando criada
*/

/*
    não é possivel redeclarar variaveis com let
    caso contrario havera erro de sintax
*/

/* 
    não podemos criar variaveis com palavras reservada pela linguagem

    ex : 
        let
        if
        log
    dentre outras

    as variaveis precisam ter nomes significativos
*/

let nomeCliente = 'José';

console.log(nomeCliente);

/*
    Nome de variavel não pode começar com numeros
    
    sempre comece o nome de variaveis com letras minusculas
    depois da primeira letra é possivel colocar um numero

    não podem conter espaços ou traços

    utilize underscore para separar
    ou coloque a primeira letra do segundo nome como maiuscula
*/


let nomeCompletoDoCliente = 'Mateus de sousa da silva'

console.log(nomeCompletoDoCliente);

/*
    letra maiuculas e minusculas fazem a diferença
*/

let nomeCompleto = 'Mateus de sousa da silva'
let nomecompleto = 'Mateus de sousa da silva'

console.log(nomeCompleto, nomecompleto);

/*
    isso torna cada variavel diferente uma da outra

    NÃO UTILIZE VAR, UTILIZE LET ao declarar variaveis
*/
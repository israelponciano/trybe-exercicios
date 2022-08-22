//Exercício 1
// let sum = 0;

// for (let i = 1; i <=50; i += 1) {
//     sum += i;
// }
// console.log('A soma total de 1 a 50 é:', sum);

//Exercício 2
// let numero = 0;

// for (let i = 2; i <= 150; i += 1){
//     if ((i % 3) == 0) {
//         numero += 1;
//     }
// }
// console.log(numero);
// if (numero == 50){
//     console.log('Mensagem Secreta');
// }

//Exercício 3
// let jogadorUm = 'pedra';
// let jogadorDois = 'papel';

// if ((jogadorUm == 'pedra') && (jogadorDois == 'tesoura')) {
//     console.log('Player 1 won');    
// } else if ((jogadorUm == 'tesoura') && (jogadorDois =='papel')){
//     console.log('Player 1 won');
// } else if ((jogadorUm == 'papel') && (jogadorDois =='pedra')) {
//     console.log('Player 1 won');
// } else if (jogadorUm == jogadorDois){
//     console.log('A Ties');
// } else {
//     console.log('Player 2 won');
// }

//Exercício 4
// let idade = 21;

// if (idade >= 18) {
//     console.log('A pessoa é maior de idade');
// }

// idade >= 18  ? console.log('A pessoa é maior de idade') : stop;

//Exercício 5
let Carolzita = 55; Murilo = 34; Baêta = 44;

if ((Carolzita > Murilo) && (Carolzita > Baêta)) {
    console.log('Carolzita é a pessoa mais velha.');
} else if (Murilo > Baêta) {
    console.log('Murilo é a pessoa mais velha.');
} else  {
    console.log('Baêta é a pessoa mais velha.');
}

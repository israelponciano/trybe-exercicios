let number = [12, 37, 42, 7, 120];
// let numeroEncontrado = [];
// let search = 12;
​
// for (let i = 0; i < number.length; i += 1) {
//     if(search === number[i]){
//         numeroEncontrado.push(number[i]);
//     } 
// }
// console.table(numeroEncontrado);
​
// let numerosImpares = [];
​
// for (let i = 1   ; i <= 50; i += 1) {
//     if ((i % 2) == 1){
//         numerosImpares.push(i);
//     } 
// }
// console.table(numerosImpares);
​
let numerosImpares = [];
let numeroEncontrado = [];
​
​
for (let i = 0; i < 155; i += 1) {
    if ((numerosImpares[i] % 3) == 0){
         numerosImpares.push(i);
    } 
 }
if (numerosImpares.length > 50) {
    console.log('Há 50 ou mais números divisiveis por 3.')
} else {
    console.log('Sequência muito pequena.')
}
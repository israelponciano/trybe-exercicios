let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0;


for (let i = 0; i < numbers.length; i += 1) {
    if ((numbers[i] % 2) == 1) {
        cont += 1;
    }
} 
if (cont > 0) {
    console.log('quantidade de numeros impares:', cont);
} else {
    console.log('nenhum valor ímpar encontrado');
}


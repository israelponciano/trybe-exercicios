const salarioBruto = 3450.10;
let aliquotaINSS = 0;
let aliquotaIR = 0;

if (salarioBruto > 0 && salarioBruto <= 1556.94){
    aliquotaINSS = salarioBruto * 0.08;
}else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaINSS = salarioBruto * 0.09;
}else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaINSS = salarioBruto * 0.11;
}else {
    aliquotaINSS = 570.88;
}

const salarioBase = salarioBruto - aliquotaINSS

if (salarioBase > 0 && salarioBase <= 1903.98){
    console.log('Insento de IR.')
}else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    aliquotaIR = salarioBase * 0.075 - 142.80;
}else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    aliquotaIR = salarioBase * 0.15 - 354.80;
}else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    aliquotaIR = salarioBase * 0.225 - 636.13;
} else {
    aliquotaIR = salarioBase * 0.275 - 869.36;
}

const salarioLiquido = salarioBase - aliquotaIR;

console.log(salarioLiquido.toFixed(2));
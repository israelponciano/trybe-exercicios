const valorDeCusto = 100;
const valorDeVenda = 130;

if (valorDeCusto != 0 || valorDeVenda != 0) {
    const custoTotal = valorDeCusto + (valorDeCusto * 0.2);
    const lucro = valorDeVenda - custoTotal;
    console.log('O lucro de 1000 produtos vendidos é de:', lucro * 1000);
} else {
    console.log('404')
}

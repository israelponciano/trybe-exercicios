function verificaPalindrome(palavra) {
    let palindromo = palavra.split('');
    let palindromo2 = palindromo.reverse();
    if (palavra === palindromo2.join('')) {
        return console.log('true');
    } else {
        return console.log('false');
    }
}

function maiorIndice(array) {
    let maiorNumero = array[0];
    let maiorIndice;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
    }
    for (let i = 0; i < array.length; i += 1) {
        console.log(array.length[i]);
        if (maiorNumero === array[i]) {
            maiorIndice = array.length[i];
        }
    }
    
    return console.log(maiorIndice);
}

maiorIndice([2, 3, 6, 7, 10, 1])


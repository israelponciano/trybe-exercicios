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
            maiorIndice = i + 1;
        }
    }
    return console.log(maiorIndice);
}

function maiorIndice(array) {
    let maiorNumero = array[0];
    let maiorIndice;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
        if (maiorNumero === array[i]) {
            maiorIndice = i + 1;
        }
    }
    return console.log(maiorIndice);
}

function menorIndice(array) {
    let menorNumero = array[0];
    let menorIndice;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] < menorNumero) {
            menorNumero = array[i];
        }
        if (menorNumero === array[i]) {
            menorIndice = i + 1;
        }
    }
    return console.log(menorIndice);
}

function maiorCaracteres(array) {
    let palavra = array[0];
    let contaLetras = [];
    let nomeRetornado;
    for (let i = 0; i < array.length; i += 1) {
        palavra = array[i].split('');
        if (contaLetras.length < palavra.length) {
            contaLetras = palavra;
            nomeRetornado = palavra.join('');
        }
    }
    return console.log(nomeRetornado);
}

function maiorRepeticao(array) {
    let comparacao;
    let contaUm;
    let contaDois = 0;
    let numero;
    for (let i = 0; i < array.length; i += 1) {
        comparacao = array[i];
        contaUm = 0;
        for (let j = 0; j < array.length; j += 1) {
            if (comparacao === array[j]) {
                contaUm += 1;
            }    
            if (contaUm > contaDois) {
                contaDois = contaUm;
                numero = array[i];
            }
        }
    }
    return console.log(numero);
}

function somaNumeros(numero) {
    let sum = 0;
    for (let i = 1; i <= numero; i += 1) {
        sum += i;
    }
    return console.log(sum);
}

function verificaFimPalavra(word, ending) {
    if (word.length > ending.length) {
        return console.log('true');
    } else {
        return console.log('false');
    }
}

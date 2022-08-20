let pecaDeXadrez = 'rEi';

switch(pecaDeXadrez.toLowerCase()) {
    case 'peão':
        console.log('O peão move-se verticalmente na coluna que encontra-se, sendo incapaz de recuar. No primeiro movimento de cada peão, a partir do ponto de partida, pode avançar duas casas e, a partir daí, uma.');
    break;
    case 'torre':
        console.log('Movimenta-se em linhas retas nas colunas e fileiras do tabuleiro não podendo, entretanto, pular peças adversárias ou aliadas.');
    break;
    case 'cavalo':
        console.log('Tem um movimento assemelhado a um "L" e, diferente das outras peças, pode pular as peças intervenientes.');    
    break;
    case 'bispo':
        console.log('Movimenta-se em diagonal, não podendo pular peças intervenientes.');
    break;
    case 'dama':
        console.log('A Dama movimenta-se em linhas retas pelas fileiras, colunas e diagonais no tabuleiro.');
    break;
    case 'rei':
        console.log('A sua movimentação consiste no deslocamento de uma casa na direção horizontal, vertical ou diagonal, desde que ela não esteja sob ataque adversário.');
    break;
    default:
        console.log('Esta não é uma peça de Xadrez.');
}
// // arquivo script.js

// console.log(document.getElementById('start').nextSibling) // nó

// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

document.getElementById('elementoOndeVoceEsta');
document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'blue';
document.getElementById('primeiroFilhoDoFilho').innerHTML = '<p>conteúdo</p>';
document.getElementById('pai').firstElementChild;
document.getElementById('elementoOndeVoceEsta').previousElementSibling;
document.getElementById('elementoOndeVoceEsta').parentNode;
document.getElementById('elementoOndeVoceEsta').nextElementSibling;
document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling;

let secaoPai = document.querySelector('#pai');
let irmaoElementeOndeEstou = document.createElement('section');
irmaoElementeOndeEstou.id = 'irmaoDeOndeEuEstou';
secaoPai.appendChild(irmaoElementeOndeEstou);

let elementoOndeEstou = document.querySelector('#elementoOndeVoceEsta');
let filhoElementeOndeEstou = document.createElement('section');
filhoElementeOndeEstou.id = 'filhoDeOndeEstou';
elementoOndeEstou.appendChild(filhoElementeOndeEstou);

let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let filhoDoPrimeiroFilho = document.createElement('section');
filhoDoPrimeiroFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilho);

document.getElementById('filhoDoPrimeiroFilhoDoFilho').parentNode.parentNode.nextElementSibling;

let paiDoPai = document.querySelector('#pai');
let primeiraRemocao = document.querySelector('#terceiroFilho');
let segundaRemocao = document.querySelector('#quartoEUltimoFilho');
let remocaoDeTexte = document.getElementById('elementoOndeVoceEsta').nextSibling;

paiDoPai.removeChild(primeiraRemocao);
paiDoPai.removeChild(segundaRemocao);
paiDoPai.removeChild(irmaoElementeOndeEstou);
paiDoPai.removeChild(remocaoDeTexte);

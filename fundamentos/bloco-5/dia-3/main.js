const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
firstLi.addEventListener('click', techClickFirst);
secondLi.addEventListener('click', techClickSecond);
thirdLi.addEventListener('click', techClickThird);
function techClickFirst() {
  firstLi.className = 'tech';
  secondLi.className = '';
  thirdLi.className = '';
}
function techClickSecond() {
  secondLi.className = 'tech';
  firstLi.className = '';
  thirdLi.className = '';
}
function techClickThird() {
  firstLi.className = '';
  secondLi.className = '';
  thirdLi.className = 'tech';
}
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
input.addEventListener('change', techTexto);
function techTexto() {
  if (firstLi.className == 'tech'){
    let valorInput = input.value;
    firstLi.innerText = valorInput;
  }
  if (secondLi.className == 'tech'){
    let valorInput = input.value;
    secondLi.innerText = valorInput;
  }
  if (thirdLi.className == 'tech'){
    let valorInput = input.value;
    thirdLi.innerText = valorInput;
  }
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
myWebpage.addEventListener('dblclick', dbClickTitulo);
function dbClickTitulo() {
  window.open('https://www.google.com/');
}
// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', mouseEmCima);
myWebpage.addEventListener('mouseleave', mouseSaiu);
function mouseEmCima() {
  myWebpage.style.color = 'red';
}
function mouseSaiu() {
  myWebpage.style.color = 'white';
}

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
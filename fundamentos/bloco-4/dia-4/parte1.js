let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ', info.personagem);

info['recorrente'] = 'Sim';
console.log(info);

for (let key in info){
  console.log(key);
}

for (let key in info){
  console.log(info[key]);
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
};

info2['recorrente'] = 'Sim';

for(key in info, info2) {
    console.log(info[key] + ' e ' + info2[key]);
}

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

let tituloLivroFavorito = leitor.livrosFavoritos[0];
console.log("O livro favorito de " + leitor.nome + ' ' + leitor.sobrenome + " se chama " + "'" + tituloLivroFavorito['titulo'] + "'.");

leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
);

console.log('Julia tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');
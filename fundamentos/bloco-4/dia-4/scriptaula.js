// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let usuario = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
};

console.log('A jogadora ' + usuario.name + ' ' + usuario.lastName + ' tem ' + usuario.age + ' anos de idade.');

usuario['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]
console.log('A jogadora ' + usuario.name + ' ' + usuario.lastName + ' foi eleita a melhor do mundo por ' + usuario.bestInTheWorld.length + ' vezes.');

console.log('A jogadora possui ' + usuario.medals.golden + ' medalhas de ouro e ' + usuario.medals.silver + ' medalhas de prata.');


let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (let key in names) {
    console.log('Olá ' + names[key]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let key in car) {
    console.log(key, car[key]);
}
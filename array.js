// Distribuir elementos em outro array (criar cópia)
const fruits = ['banana', 'pear', 'apple'];

const otherFruits = [...fruits];

// Adicionar novos itens
const fruits1 = [...fruits];
fruits1.push('mango');

console.log('push', fruits1);

// Adicionar no começo
const fruits2 = [...fruits];
fruits2.unshift('orange');

console.log('unshift', fruits2);

// Remover itens
const fruits3 = [...fruits];
fruits3.pop();

console.log('pop', fruits3);

// Remover do começo
const fruits4 = [...fruits];
fruits4.shift();

console.log('shift', fruits4);

// Remover um elemento em uma posição específica
const fruits5 = [...fruits];
fruits5.splice(1, 1);

console.log('splice', fruits5);

// Criar um novo array a partir do array anterior
const fruits6 = [...fruits];
const fruitsSlice = fruits6.slice(0, 2);

console.log('slice', fruitsSlice, fruits6);

// Modificar sem fazer mutações
const items = ['a', 'b', 'c', 'd', 'e', 'f'];
const i = 3;

const filteredItems = [
  ...items.slice(0, i - 1),
  ...items.slice(i, items.length),
];

console.log('filteredItems', filteredItems);

// Matrizes
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log('matrix', matrix);

// Preencher um array
const newArray = Array(12).fill(0);

console.log('newArray', newArray);

// Desestruturar arrays
const list = [1, 2, 3, 4, 5];
const [first, second, ...others] = list;

console.log('destructure', first, second, others);

// Limites de um array
const letters = ['a', 'b', 'c', 'd', 'e'];

console.log(letters[letters.length - 1]);
letters[10] = 10;

console.log(letters);

letters.length = 3;
console.log(letters);

const z = letters.indexOf(function (letter) {
  return letter === 'z';
});
console.log(z);

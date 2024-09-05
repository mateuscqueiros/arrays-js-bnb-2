/* Funções anônimas nos métodos dos arrays */
const array = ['a', 'b', 'c', 'd', 'e'];

function mapFunction(item, index, array) {
  console.log({
    item,
    index,
  });
}

// console.log(mapFunction);
// console.log(mapFunction(1, 0));

for (let i = 0; i < array.length; i++) {
  const element = array[i];

  // mapFunction(element, i, array);
}

/* map
  1 - Faz iterações sobre os elementos do array
  2 - Cria um novo array com base no retorno da função de callback
*/
const novoArray = array.map((el) => {
  return 'letra: ' + el;
});

console.log(array, novoArray);

/* filter
  1 - Durante a iteração, cria um novo array mantendo os elementos cuja verificação retornada pela função de callback seja true.
*/
const filterArray = array.filter((element) => element !== 'a');

console.log(filterArray);

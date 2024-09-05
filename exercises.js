const frutas = [
  'maçã',
  'banana',
  'laranja',
  'uva',
  'manga',
  'abacaxi',
  'pêssego',
  'kiwi',
  'melancia',
  'coco',
];

// 1 - Copiar usando spread
const copiaFrutas = [...frutas];
console.log('1 - ', copiaFrutas);

// 2 - Combinar dois arrays
const outroArray = ['morango', 'amora', 'framboesa'];
const combinarFrutas = [...frutas, ...outroArray];
console.log('2 - ', combinarFrutas);

// 3 - Desestrturar as três primeiras frutas
const [primeiro3, segundo3, terceiro3] = frutas;
console.log('3 - ', primeiro3, segundo3, terceiro3);

// 4 - Desestruturar a primeira e colocar o resto em um array
const [primeiro4, ...resto4] = frutas;
console.log('4 - ', resto4);

// 5 - Combinar e desestruturar dois arrays
const outrasFrutas5 = ['morango', 'amora', 'framboesa'];
const combinar5 = [...frutas, ...outrasFrutas5];
const [primeira5, ...resto5] = combinar5;

console.log('5 - ', primeira5, resto5);

// 6 - Trocar frutas
let [a, b] = ['primeiro', 'segundo'];
[a, b] = [b, a];

console.log('6 - ', a, b);

// 7 - Passar argumentos para uma função

function concatenaFrutas(p1, p2, p3) {
  return `${p1}, ${p2}, ${p3}`;
}

console.log('7 - ', concatenaFrutas(...frutas));

// 8 - Adicionar frutas no início do array
const novasFrutasInicio8 = ['morango', 'amora', 'framboesa', ...frutas];

console.log('8 - ', novasFrutasInicio8);

// 9 - Dividir array em duas partes
const [f1, f2, f3, f4, f5, ...resto9] = frutas;
console.log('9 - ', [f1, f2, f3, f4, f5], resto9);

// 10 - Remover fruta do meio do array
const [parte1, parte2] = [frutas.slice(0, 4), frutas.slice(5)];
const semManga = [...parte1, ...parte2];

console.log('10 - ', semManga);

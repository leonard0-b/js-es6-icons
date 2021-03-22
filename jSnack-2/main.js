// JSNACK 2
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// mi costruisco una mia funzione con array e due numeri🐱‍👤
const myFunction = (array, a, b) => {
  // mi ritornerà un nuovo array con la funzione slice e due due estremi (b+1 per poter includere anche il numero)🐱‍👤
  return newArray = array.slice(a, b+1);
  return newArray;
}

// risultato della funzione coi numeri 1 e 4🐱‍👤
let result = myFunction(numeri, 1, 4);
console.log(result);

// JSNACK 2
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

// METODO ALTERNATIVO

// const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 
// const myFunction = (array, a, b) => {
//   const arrayFiltered = array.filter((element, index, array) =>{
//     return index >= a && index <= b
//     console.log(index);
//   });
//   return arrayFiltered
// }
//
// console.log(myFunction(numeri, 2, 3));

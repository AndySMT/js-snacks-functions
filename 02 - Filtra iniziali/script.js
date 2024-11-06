/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function specificChar(nameList) {
  let firstChar = [];
  for (let i = 0; i <= names.length - 1; i++) {
    if (names[i].charAt(0) === "A") {
      firstChar.push(names[i]);
    }
  }
  return firstChar;
}

// Invoca la funzione qui e stampa il risultato in console
let specific = specificChar(names);
console.log(specific);
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

let specificCharArrow = (nameList) => {
  let firstChar = [];
  for (let i = 0; i <= names.length - 1; i++) {
    if (names[i].charAt(0) === "A") {
      firstChar.push(names[i]);
    }
  }
  return firstChar;
};
console.log(specificCharArrow(names));

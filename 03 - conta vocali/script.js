/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";
let vowels = ["a", "e", "i", "o", "u"];

// Dichiara la funzione qui.
function vowelsCount(parola = "") {
  parola = parola.toLowerCase();
  let counter = 0;
  for (let i = 0; i < parola.length; i++) {
    const currentChar = parola[i];
    if (vowels.includes(parola[i])) {
      counter++;
    }
  }
  return counter;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vowelsCount(word));
//Risultato atteso se si passa 'javascript': 3 (a, a, i)

/* ArrowFunction */

let vowelsCountArrow = (parola = "") => {
  parola = parola.toLowerCase();
  let counter = 0;
  for (let i = 0; i < parola.length; i++) {
    const currentChar = parola[i];
    if (vowels.includes(parola[i])) {
      counter++;
    }
  }
  return counter;
};

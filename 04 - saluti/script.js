/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = "Mario";

// Dichiara la funzione qui.
function hello(nome) {
  return "ciao " + nome;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(hello(name));
//Risultato atteso se si passa 'Mario': // ciao Mario

/* ArrowFunction */

let helloArrow = (nome) => "ciao " + nome;
console.log(helloArrow(name));

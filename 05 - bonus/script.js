/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
function hello(nome) {
  let saluto = "";
  let currentHour = new Date().getHours();
  if (currentHour < 13) {
    saluto = "buongiorno";
  } else if (currentHour < 17) {
    saluto = "buon pomeriggio";
  } else {
    saluto = "buonasera";
  }

  return saluto + " " + nome;
}
console.log(hello(name));
// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

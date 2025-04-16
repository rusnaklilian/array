// Declaram un array de culori
const colors = ["red", "green", "blue"];

// Functia care verifica pozitia unei culori in array
function checkColor(color) {
  // Folosim indexOf pentru a gasi pozitia culorii
  // Daca culoarea nu este gasita, se returneaza -1
  return colors.indexOf(color);
}

// Exemple de test
console.log(checkColor("red"));    // 0 - 'red' se afla pe indexul 0
console.log(checkColor("blue"));   // 2 - 'blue' se afla pe indexul 2
console.log(checkColor("yellow")); // -1 - 'yellow' nu se afla in array
console.log(checkColor("green"));  // 1 - 'green' se afla pe indexul 1

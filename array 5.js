// Array-ul original cu valori duplicate
const originalArray = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

// Functia care elimina duplicatele si sorteaza array-ul
function uniqueSorted() {
  // Folosim Set pentru a elimina duplicatele (Set pastreaza doar valori unice)
  // Apoi folosim sort pentru a sorta array-ul in ordine crescatoare
  return [...new Set(originalArray)].sort((a, b) => a - b);
}

// Testam functia
console.log(uniqueSorted()); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Array-ul original cu diverse tipuri de date
const originalArray = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, "word", 7, 8, false, 9, 100];

// Functia care filtreaza numerele intre 1 si 9 inclusiv
function filterNumbers() {
  // Folosim filter pentru a crea un array nou cu doar numerele valide
  return originalArray.filter(item => 
    // Verificam daca elementul este un numar
    typeof item === 'number' && 
    // Verificam daca numarul este intre 1 si 9 inclusiv
    item >= 1 && item <= 9
  );
}

// Testam functia
console.log(filterNumbers()); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

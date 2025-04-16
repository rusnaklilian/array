// Functia care proceseaza array-ul folosind o functie data
function convert(fn, array) {
    // Cream un array gol pentru a stoca rezultatele
    let result = [];
    
    // Parcurgem fiecare element din array
    for (let i = 0; i < array.length; i++) {
      // Aplicam functia pe fiecare element si adaugam rezultatul in array
      result.push(fn(array[i]));
    }
    
    // Returnam noul array cu valorile procesate
    return result;
  }
  
  // Exemplu de functie care ridica un numar la patrat
  function square(x) { 
    return x * x; 
  }
  
  // Testam functia convert
  console.log(convert(square, [1, 2, 3, 4])); // Output: [1, 4, 9, 16]
  console.log(convert(square, [])); // Output: []
  
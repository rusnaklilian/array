const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Înlocuim elementele de la index 4, 5 și 6 cu 0
numbers.splice(4, 3, 0, 0, 0);

console.log(numbers); 
// Output: [1, 2, 3, 4, 0, 0, 0, 8, 9]

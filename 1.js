// Array-ul de numere
const numbers = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

// Calculăm media aritmetică
const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

// 1. Afișăm numerele < 5
console.log("Numere < 5:");
numbers.filter(num => num < 5).forEach(console.log);

// 2. Pozițiile valorilor maxime și minime
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(`Poziția valorii maxime (${max}): ${numbers.indexOf(max)}`);
console.log(`Poziția valorii minime (${min}): ${numbers.indexOf(min)}`);

// 3. Afișăm elementele mai mari decât media
console.log("\nElemente mai mari decât media aritmetică:");
numbers.filter(num => num > mean).forEach(console.log);

// 4. Numărul de elemente negative și pozitive
const negativeCount = numbers.filter(num => num < 0).length;
const positiveCount = numbers.filter(num => num > 0).length;

console.log(`\nNumăr de elemente negative: ${negativeCount}`);
console.log(`Număr de elemente pozitive: ${positiveCount}`);

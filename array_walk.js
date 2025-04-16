// Creem un array de n numere
let numbers = [1, 2, 3, 4, 5];

// 1. Metoda cu for loop
console.log("Using for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 2. Metoda cu while loop
console.log("Using while loop:");
let j = 0;
while (j < numbers.length) {
  console.log(numbers[j]);
  j++;
}

// 3. Metoda cu do...while loop
console.log("Using do...while loop:");
let k = 0;
do {
  console.log(numbers[k]);
  k++;
} while (k < numbers.length);

// 4. Metoda cu for...in loop
console.log("Using for...in loop:");
for (let index in numbers) {
  console.log(numbers[index]);
}

// 5. Metoda cu for...of loop
console.log("Using for...of loop:");
for (let number of numbers) {
  console.log(number);
}

// 6. Metoda cu forEach
console.log("Using forEach:");
numbers.forEach(number => console.log(number));

// 7. Metoda cu map
console.log("Using map:");
numbers.map(number => console.log(number));

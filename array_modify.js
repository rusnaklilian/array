// 1. Cream un array cu elementele "Jazz" si "Blues"
let styles = ["Jazz", "Blues"];
console.log(styles);  // Output: ["Jazz", "Blues"]

// 2. Adaugam "Rock-n-Roll" la sfarsitul array-ului
styles.push("Rock-n-Roll");
console.log(styles);  // Output: ["Jazz", "Blues", "Rock-n-Roll"]

// 3. Inlocuim elementul din mijloc cu "Classical"
// Verificam daca array-ul are un numar impar de elemente
let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classical";
console.log(styles);  // Output: ["Jazz", "Classical", "Rock-n-Roll"]

// 4. Indeparam primul element si il afisam
let removedElement = styles.shift();
console.log(removedElement);  // Output: "Jazz"
console.log(styles);          // Output: ["Classical", "Rock-n-Roll"]

// 5. Inseram "Rap" si "Reggae" la inceputul array-ului
styles.unshift("Rap", "Reggae");
console.log(styles);  // Output: ["Rap", "Reggae", "Classical", "Rock-n-Roll"]

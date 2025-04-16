// Array-ul original de culori
let colors = ["white", "blue", "yellow", "black", "red", "green"];

// Array destructuring pentru a asigna primele doua elemente
// Primul element la firstColor, al doilea la secondColor,
// iar restul elementelor intr-un array otherColors
let [firstColor, secondColor, ...otherColors] = colors;

// Afișăm valorile celor 3 variabile
console.log(firstColor);   // Output: "white"
console.log(secondColor);  // Output: "blue"
console.log(otherColors);  // Output: ["yellow", "black", "red", "green"]

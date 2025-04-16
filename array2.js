function extrage(start, end) {
    const numere = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // numere intregi de la unu la noua
    return numere.slice(start, end + 1);       // extrage secventa dorita din sir
}

console.log(extrage(2, 4)); // afiseaza valorile extrase

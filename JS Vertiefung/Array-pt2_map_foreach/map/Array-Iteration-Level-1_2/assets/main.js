// # ✅ Aufgabenstellung

// - Lernziel: JavaScript-Methode [map()](https://www.w3schools.com/jsref/jsref_map.asp) verstehen und anwenden.
// - Verwende das vorgegebene Array getraenke (siehe Code-Snippet).
// - Nutze die map()-Methode, um in der neuen Variable upperDrinks alle Getränke in Großbuchstaben zu speichern.
// - Wende nun die map()-Function auf dein Array getraenke an.
// - Gib nun upperDrinks in der Konsole aus.


const drinks = [
    'Coca-Cola',
    'Apfelsaft',
    'Pepsi',
    'Traubensaft',
    'Sprite',
    'Orangensaft',
    'Red Bull Energy Drink',
    'Fanta',
];
console.table(drinks);

const upperDrinks = drinks.map((drinks) => drinks.toUpperCase());
console.table(upperDrinks);


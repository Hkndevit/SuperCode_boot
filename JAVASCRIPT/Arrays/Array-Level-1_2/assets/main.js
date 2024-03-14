// # Aufgabenstellung

// - Lernziel: Zugriff auf Array-Werte erlernen und anwenden.
// - Jetzt, da du weißt, wie man ein Array definiert, kannst du versuchen, auf einzelne Werte zuzugreifen.
// - Denke daran, dass [Arrays 0-indiziert](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array?retiredLocale=de#array%5Findices) sind, d.h. sie fangen bei 0 an zu zählen.
// - Um auf ein einzelnes Element zuzugreifen, verwende den Namen des Arrays gefolgt von eckigen Klammern und dem Index.
// - Zum Beispiel: friends\[1\] gibt den Wert an der Position 1 im Array friends zurück.
// - Lasse dir aus deinen vorhin erstellten Arrays person, friends und favoriteFood die einzelnen Werte in der Konsole ausgeben.

let person = "Hakan"; "Ercan"; "Mustafa";
let friend = "Hans"; "Müller"; "Mustermann";
let favoriteFood = "Pizza"; "Döner"; "Pasta";

const personen = ["Hakan", "Ercan", "Mustafa"];
console.table(personen);

const friends = ["Hans", "Müller", "Mustermann"];
console.table(friends);

const favoriteFoods= ["Pizza", "Döner", "Pasta"];
console.table(favoriteFoods);

// _____________________________________________________________________________________________


console.log(personen[2]);
console.log(personen[0]);
console.log(personen[1]);

console.log(friends[2]);
console.log(friends[1]);
console.log(friends[0]);

console.log(favoriteFoods[0]);
console.log(favoriteFoods[1]);
console.log(favoriteFoods[2]);
// # ✅ Aufgabenstellung

// - Jetzt kannst du Arrays erstellen und deren einzelne Werte ausgeben.
// - Um die Anzahl der Werte in einem Array zu ermitteln, kannst du die Array-Methode [length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/length) verwenden.
// - Verwende die length-Methode, um zu überprüfen, wie viele Werte sich in deinen Arrays befinden.
// - Lasse das Ergebnis in der Konsole ausgeben.
// - Achte darauf, welches Ergebnis dir die Methode in der Konsole anzeigt.

let person = "Hakan"; "Ercan"; "Mustafa";
let friend = "Hans"; "Müller"; "Mustermann";
let favoriteFood = "Pizza"; "Döner"; "Pasta";

const personen = ["Hakan", "Ercan", "Mustafa"];
console.table(personen);

const friends = ["Hans", "Müller", "Mustermann"];
console.table(friends);

const favoriteFoods= ["Pizza", "Döner", "Pasta", "Sushi"];
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

// _____________________________________________________________________________________________

console.log(personen.length);
console.log(friends.length);
console.log(favoriteFoods.length);

// _____________________________________________________________________________________________

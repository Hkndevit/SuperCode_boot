// # ✅ Aufgabenstellung

// - Lernziel: Array-Methode pop() Verstehen und Anwenden.
// - Wer hinzufügt, der muss es auch wieder entfernen können. Dafür wird die Array-Methode [pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/pop) genutzt. Bei pop() wird der letzte Wert von einem Array entfernt und der entfernte Wert wird zurückgegeben.
// - Nutze wiedereinmal die Arrays aus der vorherigen Übung. Entferne jeweils einen Wert aus deinen Arrays und lasse dir den entfernten Wert in der Konsole ausgeben.
// - Zur besseren Darstellung kannst du dir das Array vor dem pop() ausgeben lassen, dann den entfernten Wert und dann das Array nochmal. Schau dir die Ergebnisvorschau an.

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

let pushPersonen = personen.push("Murat");
console.log({pushPersonen});
console.table(personen); 

let pushFriends = friends.push("Maria");
console.log({pushFriends});
console.table(friends); 

let pushFavoriteFoods = favoriteFoods.push("Pommes");
console.log({pushFavoriteFoods});
console.table(favoriteFoods); 

// _____________________________________________________________________________________________

let popPersonen = personen.pop();
console.log(popPersonen);
console.table(personen); 

let popFriends = friends.pop();
console.log(popFriends);
console.table(friends); 

let popFavoriteFoods = favoriteFoods.pop();
console.log(popFavoriteFoods);
console.table(favoriteFoods); 

// _____________________________________________________________________________________________

// # ✅ Aufgabenstellung

// - Lernziel: Verstehen und Anwenden der Array-Methode push().
// - Erstelle ein Array und ergänze es mit der Array-Methode [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/push). Mit push() kannst du einen oder mehrere Werte gleichzeitig an das Ende eines Arrays hinzufügen.
// - Verwende push(), um mindestens 2 neue Werte zu deinem Array hinzuzufügen.
// - Verwende console.log(), um den Inhalt und die Länge deines Arrays vor und nach dem Hinzufügen neuer Werte anzuzeigen. Beobachte die Veränderungen in der Konsole.

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
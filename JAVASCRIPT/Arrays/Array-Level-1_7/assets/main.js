// # ✅ Aufgabenstellung

// - Lernziel: Array-Methode unshift() Verstehen und Anwenden.
// - Eine weitere Array-Methode ist [unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/unshift?retiredLocale=de). Hierbei wird vorne ein Wert hinzugefügt und die Indexe von allen anderen Werten im Array rücken eine Position nach hinten.
// - Füge deinem Array friends und favoriteFood mindestens 2 Werte hinzu.
// - Lasse dir zum besseren Verständnis das Array vorher und nachher in der Konsole ausgeben.

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

let unshiftPersonen = personen.unshift("Kerim", "Koray");
console.log(unshiftPersonen);
console.table(personen); 

let unshiftFavoriteFoods = favoriteFoods.unshift("Wurst", "Nudel");
console.log(unshiftFavoriteFoods);
console.table(favoriteFoods); 


// _____________________________________________________________________________________________

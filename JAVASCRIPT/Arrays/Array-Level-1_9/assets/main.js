// # ✅ Aufgabenstellung

// - Lernziel: Unterschied von Push-Pop und Shift-Unshift.
// - Erstelle ein Array und ordne es einer Variable zu.
// - Das Array hat folgende Werte: 23, 54, 75;
// - Verwende die Push-Methode, um 5 Werte in dein Array einzufügen.
// - Verwende die Unshift-Methode, um 5 Werte an der Vorderseite deines Arrays hinzuzufügen.
// - Verwende die Pop-Methode, um 2 Werte von der Rückseite deines Arrays zu entfernen.
// - Verwende die Shift-Methode, um 2 Werte von der Vorderseite deines Arrays zu entfernen.

// ARRAY Methode
let nummer = 23; 54; 75;
const nummernschilder = [23, 54, 75,]
console.log(nummernschilder);

// PUSH Methode
let pushNummer = nummernschilder.push(11, 32, 42, 5, 71)
console.log(nummernschilder);

// UNSHIFT Methode
let unshiftNummer = nummernschilder.unshift(1, 3, 7, 8, 14);
console.log(nummernschilder);

// POP Methode
let popNummer = nummernschilder.pop(); nummernschilder.pop(); ;
console.log(nummernschilder);

// SHIFT Methode 
let shiftNummer = nummernschilder.shift();nummernschilder.shift();
console.log(nummernschilder);



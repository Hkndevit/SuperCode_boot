// # ✅ Aufgabenstellung

// - Lernziel: Array-Methode filter() verstehen und anwenden.
// - In dieser Übung wendest du die filter()-Methode an, um ein Array von Zeichenketten zu verfeinern. Das Ergebnis ist ein neues Array, das ausschließlich Zeichenketten enthält, die nicht mehr als 6 Zeichen lang sind.
// - Schreibe eine Function, die das vorgegebene Array woerter durchläuft.
// - Die Function soll zunächst alle Zeichenketten filtern, die 6 Zeichen oder weniger in der Länge haben.
// - Gib das Ergebnis nun in der Konsole aus.
// - Das Array ist vorgegeben (siehe Code-Snippet).

const woerter = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];
console.table(woerter);

const longNames = woerter.filter((shortLongNames) => shortLongNames.length <= 6);
console.table(longNames);
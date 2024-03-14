// # ✅ Aufgabenstellung

// - Lernziel: Textausgabe je nach Eingabe der User:innen erstellen unter Verwendung von Bedingungen und Schleifen.
// - In deinem HTML ist ein Inputfeld zu sehen, in das User:innen eine Zahl eingeben können. So wird die Anzahl des Buchstabens "o" festgelegt.
// - Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort "Loop" ausgibst, mit der eingebenen Anzahl aus dem Input-Feld.

// output selektieren
const userOutput = document.querySelector("#outputMe");

// funktion zuweisen mit input
function myFunction() {
    const userInput = document.querySelector("#text").value;

    // L und p in eine Variable packen
    let loop = ["L", "p"];

    // for schleife ab 1 aufwärts mit userInput angeben
    for (let i = 1; i <= userInput; i++) {
        // unsere variable mit .splice verbinden und declarieren
        loop.splice(1, 0, "o");
    }
    // userOutput mit .join methode ausgeben lassen join("")
    userOutput.innerHTML = loop.join("");

}
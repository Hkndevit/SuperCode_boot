// # ✅ Aufgabenstellung

// - Lernziel: Textausgabe je nach Eingabe der User:innen erstellen unter Verwendung von Bedingungen und Schleifen.
// - Du verfeinerst deine "Loooooop"-Aufgabe.
// - Jetzt soll eine Fehlermeldung ausgegeben werden, wenn der/die User:in 0 eingibt.
// - Wenn die Eingabe gerade ist (z. B. 2, 4, 6, ...), sollten sich die "o"-Buchstaben in das Wort "L..p" einfügen, wobei die Anzahl der "o"-Buchstaben der Eingabezahl entspricht. Zum Beispiel: Bei der Eingabe von 4 wird "Loooop" ausgegeben.
// - Wenn die Eingabe ungerade ist (z. B. 1, 3, 5, ...), sollten sich abwechselnd "o" und "0" in das Wort "L..p" einfügen, beginnend mit "o". Zum Beispiel: Bei der Eingabe von 5 wird "Lo0o0op" ausgegeben.


// ---- AUFGABE NICHT FERTIG ---
// ---- AUFGABE NICHT FERTIG ---
// ---- AUFGABE NICHT FERTIG ---


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

// ---- AUFGABE NICHT FERTIG ---
// ---- AUFGABE NICHT FERTIG ---
// ---- AUFGABE NICHT FERTIG ---
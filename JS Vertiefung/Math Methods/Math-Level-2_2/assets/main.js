// # ✅ Aufgabenstellung

// - Lernziel: Anwendung von Math.random() und prompt für die Erzeugung zufälliger Werte und die Interaktion mit Benutzereingaben.
// - Schreibe ein kleines Spiel/Programm, das wie folgt funktioniert:
// 1. Das Programm “denkt” sich eine Zahl zwischen 1-10 mithilfe von Math.random() aus und du musst sie erraten.
// 2. Nach Eingabe deiner Zahl sagt dir das Programm (in der Konsole), ob du richtig oder falsch geraten hast.

let zufall = Math.ceil(Math.random() * 10)
check = prompt("Schätzen Sie die Nummer zwsichen 1 und 10")
console.log(Math.ceil(Math.random() * 10));

if (check != zufall) {
    console.log("Falsch geraten.");
    } else {
        console.log("Richtig geraten. Gratuliere :)) Es ist eine " + zufall);
    }


// # ✅ Aufgabenstellung

// - Lernziel: Verstehen und Anwenden von Conditional-Statements (if/else).
// - Erstelle ein HTML-Formular, um mit einem [Range-Slider](https://www.w3schools.com/tags/att%5Finput%5Ftype%5Frange.asp) die Luftqualität (AQI:air-quality-index) in einem Bereich von 0 bis 150 anzuzeigen.
// - Das Ergebnis soll in HTML ausgegeben werden. Dazu sollte jeweils die Hintergrundfarbe vom body angepasst werden.
// - Deklariere die Funktion checkAirQuality() und nutze im Funktionskörper Conditional-Statements (if...else).


function checkAirQuality() {
    const airPointer = document.querySelector("input").value;
    
    const bgColor = document.querySelector("body");
    const outputP = document.querySelector("p");
    

    if ( airPointer <50) { 
        // Wenn Airpointer kleiner ist als 50...
        // Soll das hier passieren.
        outputP.innerHTML = "Luftverschmutzung in Ordnung";
        bgColor.style.backgroundColor = "green";
    } else if (airPointer >50 && airPointer <= 100) {
        // wenn Airpointer zwischen 50 und 100 ist...
        // soll das hier passieren
        outputP.innerHTML = "Luftverschmutzunh gefährdet";
        bgColor.style.backgroundColor = "orange";
    } else if (airPointer >100) {
        // Wenn Airpointer grölßer als 100 ist...
        // soll dass hier passieren
        outputP.innerHTML = "Luftverschmutzung GAFAHR !!! TÖDLICH";
        bgColor.style.backgroundColor = "red"
    } 

}
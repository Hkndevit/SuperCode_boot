// - In dieser Aufgabe erstellst du einen ersten Background-Generator. Über ein Formular kannst du die Werte für "rot", "grün" und "blau" anpassen und die Hintergrundfarbe vom <body> verändert sich entsprechend.
// - Nutze drei <input>-Felder mit type="range" und gebe ihnen jeweils ein label.
// - Verwende in den <input>-Feldern: id | name | min | max | value | step
// - In allen <input>-Feldern soll die Funktion changeBackground() mit onChange aufgerufen werden.
// - Definiere in der Funktion changeBackground() neue value für "rot", "grün" und "blau".



// Hier lege ich die Variablen für die Input-Felder fest.
function changeBackground() { 
const bgRed = document.querySelector("#red").value;
const bgGreen = document.querySelector("#green").value;
const bgBlue = document.querySelector("#blue").value;

// Lege Variable für mein DIV fest.
const range = document.querySelector(".range");

// Setze hier die Hintergrundfarbe für die drei Input Felder zusammen.
range.style.backgroundColor =
"rgb(" + bgRed + "," + bgGreen + "," + bgBlue + ")";

}

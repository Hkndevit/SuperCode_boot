// # ✅ Aufgabenstellung

// - Lernziel: Verwendung der JavaScript-Methode map().
// - Schreibe eine Function, die mit Hilfe von map() ein Array aus Temperaturen von Fahrenheit in Celsius umwandelt.
// - Verwende die [mathematische Formel](https://www.metric-conversions.org/de/temperatur/fahrenheit-in-celsius.htm) celsius = (℉ - 32) / 1.8 zur Umrechnung.
// - Verwende das Array aus dem Code-Snippet.
// - Überprüfe das Ergebnis in der Konsole.

const fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
console.table(fahrenheit);

let celsius = fahrenheit.map((allNumbers) => {
    return Math.round((allNumbers - 32) / 1.8);
  });
  console.table(celsius);
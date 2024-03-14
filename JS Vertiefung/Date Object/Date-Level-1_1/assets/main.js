// # ✅ Aufgabenstellung

// - In dieser Übung werden wir [Date()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Date id=) lernen.
// - Stelle die folgenden Daten im HTML-Dokument mit Hilfe des Befehls new Date() dar.
// - Speichere die Werte in Variablen (date1, date2, usw.).
// - Verwende innerHTML, um das Ergebnis darzustellen.
// - Teste die folgenden Werte:  new Date("September 2, 2019 09:00:00")  new Date(0)  new Date(31556908800)  new Date(86400000)



output = document.querySelector("#dataOutput");

date1 = new Date("September 2, 2019 09:00:00");
date2 = new Date(0);
date3 = new Date(31556908800);  
date4 = new Date(86400000);

output.innerHTML = `
<div>
<p>${date1}</p>
<p>${date2}</p>
<p>${date3}</p>
<p>${date4}</p>
</div>`
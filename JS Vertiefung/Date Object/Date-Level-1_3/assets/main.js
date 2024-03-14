// # ✅ Aufgabenstellung

// - Lernziel: Die Verwendung der [setDate()-Methode](https://www.w3schools.com/jsref/jsref%5Fsetdate.asp) in JavaScript verstehen, um das Tagesdatum eines Date-Objekts zu ändern.
// - Zeige die Daten wie auf dem Screenshot an und nutze die setDate()-Methode.
// - In der letzten Zeile wurden 30 Tage auf das damals aktuelle Datum addiert.
// - Denk daran, dass dein Ergebnis sich aufgrund des Datums von dem Screenshot unterscheiden wird.
// - Nutze Google, falls du nicht weiterkommst.

output = document.querySelector(".outputText");


let date0 = new Date("July 7, 2222 17:25:00");
date0.setDate(15);
let date1 = new Date("March 10, 2074 08:45:00");
date1.setDate(19);
let date2 = new Date("January 14, 2401 01:55:00");
date2.setDate(22);
let date3 = new Date("August 17, 2057 21:15:00");
date3.setDate(25);
let date4 = new Date("October 29, 1999 11:25:00");
date4.setDate(29);

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 30);
const formattedDate = currentDate.toLocaleDateString();


output.innerHTML = `
<div>
<p>${date0}</p>
<p>${date1}</p>
<p>${date2}</p>
<p>${date3}</p>
<p>${date4}</p>
<p>${currentDate}</p>
</div>`





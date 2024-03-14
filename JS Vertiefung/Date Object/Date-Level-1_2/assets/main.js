// # ✅ Aufgabenstellung

// - Lernziel: [Date-Methods](https://www.notion.so/Forms-JS-Level-3_3-d9e6ceb735d2424da449ef6fcfe508c0?pvs=21) anwenden und verstehen.
// - Zeige die Daten wie auf dem Screenshot an.
// - Der Code ist vorgegeben (siehe Code-Snippet), um den Wochentag und den Monat anzuzeigen.
// - Nutze Google, wenn du bei der Umsetzung Hilfe benötigst.
// - Du siehst hier das aktuelle Datum des Screenshots! Dein Ergebnis orientiert sich an dem aktuellen Datum.
// - Erstelle ein schönes CSS-Design für deine elektronische Uhr und füge ein festes Datum ein. Dieses Design werden wir später verwenden, um eine funktionierende Uhr zu bauen!

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

// HTML PART
const displayDay = document.querySelector(".day");
const displayHours = document.querySelector(".hours");
const displayMinutes = document.querySelector(".minutes");
const displaySeconds = document.querySelector(".seconds");

const displayPeriod = document.querySelector(".period");
const displayPoint1 = document.querySelector(".point1");
const displayPoint2 = document.querySelector(".point2");

// JS PART
let date1 = new Date();
const day = date1.toLocaleString("default", {weekday: "short"});
displayDay.innerHTML = (day);

let date2 = new Date();
const hours = date2.getHours();
displayHours.innerHTML = (hours);

let date3 = new Date();
const minutes = date3.getMinutes();
displayMinutes.innerHTML = (minutes);

let date4 = new Date();
const seconds = date4.getSeconds();
displaySeconds.innerHTML = (seconds);

// ClockTops
const pointer1 = ":";
displayPoint1.innerHTML = (pointer1);

const pointer2 = ":";
displayPoint2.innerHTML = (pointer2);


// AMPM FUNCTION
const date5 = "PM"
let period

if (period > "AM") {
  time = 12
} else {
  time = 24
}
displayPeriod.innerHTML = (date5);
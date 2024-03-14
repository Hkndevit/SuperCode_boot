// # ✅ Aufgabenstellung

// - Schreibe eine Funktion, die beim Anklicken des Buttons die ausgewählte Farboption auf den Hintergrund des <body> anwendet.
// - Verwende den Code aus dem Code-Snippet.
// - Verwende folgende Befehle für die Aufgabe: addEventListener(“click”), event.preventDefault(); und .value oder [selectedIndex](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex).
// - Nutze Google, um zu lernen wie man Leerzeichen in Zeichenketten entfernt.

const selectColor = document.querySelector("#farbeAuswahlen");
const changeBgBtn = document.querySelector("#button");
const body = document.querySelector("body");

selectColor.addEventListener("click", (event) => {
    event.preventDefault();
    body.style.background = selectColor.value.toLowerCase().replaceAll(" ", "");
} );
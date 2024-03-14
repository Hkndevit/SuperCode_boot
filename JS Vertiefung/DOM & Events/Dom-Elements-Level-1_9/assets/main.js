// # ✅ Aufgabenstellung

// - Lernziel: addEventListener(),selectedIndex und remove() verstehen und anwenden.
// - Dieses Mal sollst du eine Function schreiben, die beim Anklicken des Buttons die jeweilige Farb-Option aus der Liste entfernt.
// - HTML und CSS ist vorgegeben. Siehe (Code-Snippet).
// - Nutze: [addEventListener()](https://www.w3schools.com/jsref/met%5Fdocument%5Faddeventlistener.asp), [selectedIndex()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex) und [remove()](https://www.w3schools.com/jsref/met%5Felement%5Fremove.asp).


const selectColor = document.querySelector("#farbeAuswahlen");
const removeButton = document.querySelector("#button");


    removeButton.addEventListener("click", (event) => {
        event.preventDefault();

        selectColor.remove(selectColor.selectedIndex);
    })
// # ✅ Aufgabenstellung

// - Schreibe eine kleine App, die die Hintergrundfarbe deiner Webseite ändert. Schaue dir die Vorschau an und versuche es umzusetzen.
// - HTML und CSS befinden sich im Code-Snippet.

const grey = document.querySelector("#grauTaste");
const white = document.querySelector("#weissTaste");
const blue = document.querySelector("#blauTaste");
const yellow = document.querySelector("#gelbTaste");

const body = document.querySelector("body");

grey.addEventListener("click", (event) => {
    event.preventDefault();
    body.style.background = "grey";
});

white.addEventListener("click", (event) => {
    event.preventDefault();
    body.style.background = "white";
});

blue.addEventListener("click", (event) => {
    event.preventDefault();
    body.style.background = "blue";
})

yellow.addEventListener("click", (event) => {
    event.preventDefault();
    body.style.background = "yellow";
});

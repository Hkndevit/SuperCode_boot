// # ✅ Aufgabenstellung

// - Lernziel: Zugriff auf Objekte mit Hilfe von [forEach().](https://www.w3schools.com/jsref/jsref%5Fforeach.asp)
// - Verwende den vorgegebenen Code (siehe Code-Snippet).
// - Greife auf die Eigenschaften des Objekts zu und gib folgende Werte mit forEach() im HTML aus:  Alle "artist"  Alle "title"  Alle "medium"

let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

const output = document.querySelector(".output");

myMusic.forEach((item) => {
    output.innerHTML += `<div><p> ${item.artist} </p></div>`;
    output.innerHTML += `<div><p>  ${item.title}</p></div>  `;
    output.innerHTML += `<div><p>  ${item.medium}</p></div></br> `;
});
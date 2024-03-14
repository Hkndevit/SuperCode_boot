// # ✅ Aufgabenstellung

// - Schreibe zuerst eine Funktion, die nach x Sekunden einen Text anzeigt. Dafür kannst du die setTimeout()-Methode nutzen.
// - Schreibe anschließend eine Funktion, die das Ergebnis der Vorschau ausgibt. Nutze hierfür: setInterval(), clearInterval() und if/else.

console.log("Start: Warten für 3 Sekunden");


setTimeout(() => {
    console.log("Du hast 3 Sekunden verschwendet");
}, 3000);

const time = document.querySelector(".time");
let number = 11;
const countdown = setInterval(() => {
  number--;
  console.log(number);

  if (number <= 0) {
    clearInterval(countdown);
    console.log("Endlich Feierabend");
  }
}, 1000);


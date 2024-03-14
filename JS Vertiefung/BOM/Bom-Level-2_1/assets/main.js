// # ✅ Aufgabenstellung

// - Schreibe eine Funktion, die beim Auslösen die Zahlen runter zählt. Schau dir dazu die Ergebnisvorschau an.
// - HTML und CSS ist vorgegeben (siehe Code-Snippet).
// - Nutzen kannst du: setInterval(), clearInterval(), getElementsByClassName() oder getElementById() und if/else if.

const output = document.getElementById("count");
const message = document.querySelector(".message")

let number = 10;

const countDown = setInterval(() => {
  number--;
  output.innerHTML = number;

if (number <= 0) {
  clearInterval(countDown);
  message.innerHTML = '<p class="hidden"> </p>';
  message.classList.remove("message");
}

}, 1000)
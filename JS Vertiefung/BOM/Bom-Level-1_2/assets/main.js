// # ✅ Aufgabenstellung

// - Lernziel: JavaScript-Eventhandling und Timer-Function.
// - Schreibe eine Function, die beim Klicken des Buttons von 100% bis 0% runterzählt.
// - HTML und CSS ist vorgegeben (siehe Code-Snippet).
// - Nutzen kannst du folgende Befehle und Methoden:  onclick, setInterval(), clearInterval(), if, else if und querySelector().


const startBtn = document.querySelector("#btn");
const countDown100 = document.querySelector(".zeit");

let percent = 100;
let interval;

startBtn.onclick = function() {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => {
    if (percent > 0) {
      percent--;
      countDown100.textContent = percent + "%";
    } else {
      clearInterval(interval);
    }
    }, 100);
  };

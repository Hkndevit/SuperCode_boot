// # ✅ Aufgabenstellung

// - Schreibe eine Funktion, die sich Daten aus dem Browser zieht und diese anzeigt. Schaue dir zum besseren Verstädnis die Vorschau an.
// - Recherchiere nach dem Begriff “Window Navigator”. Dann kannst du die Aufgabe lösen.
// - Hole dir die Informationen über den Browser wie folgt:  \- Browsername  \- Betriebssystem-Architektur  \- Browser-Version  \- Window Auflösung  \- Innenhöhe und -breite des Dokuments  \- colorDepth  \- pixelDepth


const output = document.querySelector(".textOutput");
const holDatenButton = document.querySelector(".btn");

holDatenButton.addEventListener("click", () => {
  output.innerHTML = (window.navigator.userAgent)
  
});



// console.log(window.navigator.userAgent);
// console.log(window.navigator.platform);
// console.log(window.navigator.appVersion);
// console.log(window.screen.width);
// console.log(window.screen.height);
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.screen.colorDepth);
// console.log(window.screen.pixelDepth);


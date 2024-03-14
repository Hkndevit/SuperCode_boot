// # ✅ Aufgabenstellung

// - Diesmal sollst du eine Funktion schreiben, die beim Anklicken der Boxen die Farbe der angeklickten Box ändert.
// - Der HTML Code ist vorgegeben (siehe Code-Snippet).


function changeColor() {
    const divColor = document.querySelectorAll(".card");
    
    divColor.forEach(card => {
        card.addEventListener("click", () => {
            card.style.background = "green"
        } )
    })
}
changeColor();
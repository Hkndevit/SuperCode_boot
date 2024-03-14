// # ✅ Aufgabenstellung

// - Schreibe eine Funktion, die beim Anklicken der Buttons die Hintergrundfarben aller Elemente ändert.
// - HTML- und CSS-Code findest du im Code-Snippet.
// - Nutze zum Beispiel: getElementsByClassName, for-loop oder length.



const collection = document.getElementsByClassName("example");


function myFunction() {
 for (i = 0 ; i < collection.length ; i++) 
        collection[i].style.backgroundColor = "black";
}



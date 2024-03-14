// # ✅ Aufgabenstellung

// - Lernziel: Anwenden von JavaScript map() oder forEach(), um Dateiendungen zu verändern
// - Erstelle ein neues Array auf Basis des gegebenen Arrays (siehe Code-Snippet).
// - Entferne die Dateiendungen (z.B. "image.jpg" => "image").
// - Falls keine Dateiendung vorhanden ist, soll der Wert "invalid" gespeichert werden (z.B. "dog" => "invalid").
// - Die Werte sollen in Kleinbuchstaben gespeichert werden.
// - Es sollte entweder mit der map() oder forEach() Methode gearbeitet werden.

let album = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg",
]
console.table(album);

//Ergebnis in Kleinschreibung
const result = album.map((title) => {
    let newTitle = title.toLowerCase();
  
// Gif und jpg Entfernt - mit if else Slice 0 um -4 gerückt um die letzten 4 buchstaben zu löschen, wenn die angegeben jpg&gif nicht vorhanden waren mit invalid versetzt.
    if (newTitle.includes('.gif') || newTitle.includes('.jpg')) {
      return newTitle.slice(0, newTitle.length - 4);
    } else {
      return (newTitle = 'invalid');
    }
  });
  console.table(result);
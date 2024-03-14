// # ✅ Aufgabenstellung

// - Du hast eine Sammlung deiner Lieblingsbands. Du möchtest deinen Lieblingsstar aus der Liste der 100 Sängerinnen und Sänger finden.
// - Verwende den vorgegebenen Code (siehe Code Snippet)
// - Erstelle eine Suchfunktion in JavaScript, die den richtigen Künstler ausgibt.
// - Erstelle ein gutes Design für diese Tabelle.


const singers = [
    { name: 'The Beatles', country: 'United Kingdom', periodActive: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', periodActive: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', periodActive: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', periodActive: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', periodActive: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', periodActive: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', periodActive: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', periodActive: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

const container = document.querySelector("#table-container");

container.innerHTML += `
  <div>Name</div>
  <div>Country</div>
  <div>Period Active</div>
  <div>Genre</div>
  `;
  
singers.forEach((item) => {
    container.innerHTML += `<p> ${item.name}</p>`;
    container.innerHTML += `<p>${item.country}</p>`;
    container.innerHTML += `<p> ${item.periodActive.start}
    -${item.periodActive.end}</p>`;
    container.innerHTML += `<p>${item.genre}</p>`;
});

// DIE VORHERIGE AUFGABE HABE ICH ÜBERNOMMEN UND FÜGE NUN EINE SUCHFUNKTION HINZU.

function writeInHTML(writewhat) {
  // *Überschriften ins HTML schreiben
  container.innerHTML += `<p>Name</p>
  <p>Country</p>
  <p>PeriodActive</p>
  <p>Genre</p>`;

  // *Inhalt der Tabelle ins HTML schreiben
  writewhat.forEach((items) => {
    container.innerHTML += `
    <div> 
      ${items.name}
      </div>
      <div>
      ${items.country}
      </div>
      <div>
      ${items.periodActive.start} - ${items.periodActive.end}
      </div>
      <div>
      ${items.genre}
      </div>
      `;
  });
}

function handleSearchClicked() {
  const input = document.querySelector("#searchInput").value;

  const filterMusic = singers.filter((parameter) => {
    return (
      parameter.name.toLowerCase().includes(input.toLowerCase()) ||
      parameter.genre.toLowerCase().includes(input.toLowerCase())
    );
  });
  container.innerHTML = " ";

filterMusic.length <= 0
? (container.innerHTML = "Not found, try again")
: writeInHTML(filterMusic);
}



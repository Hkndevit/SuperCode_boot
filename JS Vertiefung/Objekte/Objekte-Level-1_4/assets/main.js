// # ✅ Aufgabenstellung

// - Lernziel: Auf Objekte zugreifen.
// - Verwende den vorgegebenen Code (siehe Code-Snippet).
// - Greife auf die Werte "Nala" und "Droopy" in diesem Objekt zu.
// - Lasse dir einmal alle Hundenamen anzeigen.
// - Nutze eine Methode, um die Hundenamen zu ändern.


let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    },
    
];


console.log(unsereHaustiere[0].names, unsereHaustiere[1].names);

unsereHaustiere.names = ["Balu", "Snoopy"];
console.log(unsereHaustiere.names);

console.log(unsereHaustiere[0].names[1], unsereHaustiere[1].names[2]);

function showtxt() {
    const inputType = (document.querySelector("form select").value);
    const outputType = document.querySelector("#masse");

    switch (inputType) {
        case "0":
            outputType.innerHTML = 
            "<b> Brief und Postkarte</b> <br> L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm";
        break;
        case "1":
            outputType.innerHTML =  
        "<b>DHL Paket 2 kg</b> <br>bis 60 x 30 x 15 cm";
        break;
        case "2":
            outputType.innerHTML =
            "<b>DHL Paket 5 kg</b> <br>bis 120 x 60 x 60 cm";
        break;
        case "3":
            outputType.innerHTML =
            "<b>DHL Paket 10 kg</b> <br>bis 120 x 60 x 60 cm";
        break;
        default:
            outputType.innerHTML = "extra große Größe";
        } 
}
function getInputValueHakan(event){
event.preventDefault();

const alter = document.querySelector("#alter").value; 
console.log(alter);
const hakanOutput = document.querySelector("h2")
const alterBerechnung = 2024 - alter
hakanOutput.innerHTML = alterBerechnung

}



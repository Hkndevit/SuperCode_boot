// # ✅ Aufgabenstellung

// - Du hast ein Array aus Zahlen und möchtest herausfinden, durch welche Zahlen sie (außer durch eins und sich selbst) teilbar sind.
// - Schreibe das Ergebnis in dein HTML.
// - Das Array findest du im Code-Snippet!

let numArr = [5, 22, 15, 100, 55];
const result = document.querySelector(".result");

    for ( i = 0; i < numArr.length; i++); { 
    for ( j = 2; j < numArr[i]; j++); {
    if (numArr[i] % j === 0) {
    result.innerHTML += '${numArr[i] is devidable by ${j}. The Result is ${numArr[i] / j }';
  }
 }
}
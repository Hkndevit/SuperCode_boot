const text = "Sam is going to School";
const result1 = text.toUpperCase();
const result2 = text.toLowerCase();
const result3 = text.slice(0, 3).toUpperCase() + " "  + text.slice(4, 16) + text.slice(16, 22).toUpperCase();
const result4 = text.slice(0, 3).toLowerCase() + " "  + text.slice(4, 16).toUpperCase() + text.slice(16, 22).toLowerCase();
const result5 =
  text[0].toUpperCase() +
  text.slice(1, 4) +
  text[4].toUpperCase() +
  text.slice(5, 7) +
  text[7].toUpperCase() +
  text.slice(8, 13) +
  text[13].toUpperCase() +
  text.slice(14, 16) +
  text[16].toUpperCase() +
  text.slice(17);


document.getElementById("txtP1").innerHTML = result1;
document.getElementById("txtP2").innerHTML = result2;
document.getElementById("txtP3").innerHTML = result3;
document.getElementById("txtP4").innerHTML = result4;
document.getElementById("txtP5").innerHTML = result5;
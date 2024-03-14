const text = "Sam is good at codingschool"

const String1 = "Sam is bad at school";
const String2 = "Susi is good at school";
const String3 = "Sam is good at tennis";

document.querySelector("#textP1").innerHTML = text.replace(text, String1);
document.querySelector("#textP2").innerHTML = text.replace(text, String2);
document.querySelector("#textP3").innerHTML = text.replace(text, String3);
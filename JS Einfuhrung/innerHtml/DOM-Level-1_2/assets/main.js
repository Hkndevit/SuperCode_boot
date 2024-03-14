const info = document.getElementById ("info");
console.log("info");

info.innerHTML = "Hello World";
info.innerHTML += "<h2> How are You? </h2>"

// const container = document.write("<p> start of the element </p>");
container.innerHTML += "<p> start of the element </p>";

document.getElementById('container').innerHTML += "<p> end of the element </p>";



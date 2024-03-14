function alterDiff(event){
    event.preventDefault();

   const alter1 = document.querySelector("#alter1").value;
   const alter2 = document.querySelector("#alter2").value;

   const hakanOutput = document.querySelector(".hakanOutput")

   hakanOutput.innerHTML = alter1 - alter2;
}
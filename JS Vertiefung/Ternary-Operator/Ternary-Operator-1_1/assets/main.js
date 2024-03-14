function checkAge() {
    const userInput = document.querySelector("form input[type='number']").value;
    const userOutput = document.querySelector("p");

    const userAge18 = userInput >= 18
       ? (userOutput.innerHTML = "Volljährig")
       : (userOutput.innerHTML = "minderjähtig");
}
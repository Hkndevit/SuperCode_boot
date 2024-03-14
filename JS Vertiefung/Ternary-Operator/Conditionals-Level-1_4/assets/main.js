function save() {
  const userInput = document.querySelector("form input[type='password']").value;
  const userOutput = document.querySelector("h2");

  const checkPw =
    userInput.length > 8
      ? (userOutput.innerHTML = "The Password is to short")
      : (userOutput.innerHTML = "Welcome to your Account");
}

function greaterThan() {

    const userAge = document.body.querySelector("#input").value;

    const outputP = document.body.querySelector("form p");

    if ( userAge < 18) {
        outputP.innerHTML = "Nein, Du darfst keine Shisha rauchen";
        } else { 
        outputP.innerHTML = "Ja, du kannst Shisha rauchen";
    }
}

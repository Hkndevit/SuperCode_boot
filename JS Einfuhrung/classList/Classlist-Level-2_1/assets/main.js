
function changeHeadline() {
    const newHeadline = document.querySelector("h1");
    newHeadline.classList.add("change-headline");
}

function resetHeadline() {
    const newHeadline = document.querySelector("h1");
    newHeadline.classList.remove("change-headline");
}
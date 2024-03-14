const searchOn = () => {
    const txtInput = document.querySelector("#search-input").value;
    const content = document.querySelector("article").innerText;
    
    const txtReplace = "<span style = 'font-weight: 800' > " + txtInput + "</span>";
    const result = content.replaceAll(txtInput, txtReplace);
    document.querySelector("article").innerHTML = result;
 }
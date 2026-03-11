const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let button = document.getElementById("spatiebutton");
    let input = document.getElementById("text");

    button.addEventListener("click", () => {maakMetSpaties(input.value)})
}

const maakMetSpaties = (inputText) => {
    let result = inputText.replaceAll(" ","").split("").join(" ");
    console.log(result);
}
window.addEventListener("load", setup);
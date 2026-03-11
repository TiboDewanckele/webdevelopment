const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let button = document.getElementById("spatiebutton");

    button.addEventListener("click", spatieZetten);
}

const spatieZetten = () => {
    let text = document.getElementById("text");

    console.log(text.value.replaceAll(" ","").split("").join(" "));
}
window.addEventListener("load", setup);
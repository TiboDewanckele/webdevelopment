const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    window.alert("Dit is een mededeling");
    console.log(window.confirm("Weet u het zeker?"));
    console.log(prompt("Wat is uw naam", "onbekend"));
}
window.addEventListener("load", setup);
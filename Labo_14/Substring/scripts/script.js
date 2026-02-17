const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let txtInput = document.getElementById("txtInput");
    let startgetal = document.getElementById("startgetal");
    let eindgetal = document.getElementById("eindgetal");

    const tekst = txtInput.value;
    const startWaarde = startgetal.value;
    const eindWaarde = eindgetal.value;

    if(tekst.length >= eindWaarde && startWaarde >= 0){
        let txtOutput = document.getElementById("txtOutput");
        txtOutput.innerHTML = tekst.substring(startWaarde,eindWaarde);
    } else {
        console.log("De opgegeven waardes zijn geen geldige parameters voor substring bij dit woord");
    }
}

window.addEventListener("load", setup);
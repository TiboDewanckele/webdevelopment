const setup = () => {
    let button = document.getElementById("valideer");
    button.addEventListener("click", valideerForm)
}

const valideerForm = () => {
    reset();
    let voornaamOK = controleerVoornaam();
    let familienaamOK = controleerFamilienaam();
    let geboortedatumOK = controleerGeboortedatum();
    let emailOK = controleerEmail();
    let kinderenOK = controleerKinderen();

    if(voornaamOK && familienaamOK && geboortedatumOK && emailOK && kinderenOK){
        alert("Proficiat!")
    }
}

const reset = () => {
    let inputs = document.getElementsByTagName("input");
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].style.border = "1px solid black";
    }
    let errors = document.getElementsByTagName("span");
    for(let i = 0; i < errors.length; i++) {
        errors[i].textContent = "";
    }
}

const toonError = (inputveld, boodschap) => {
    let element = document.getElementById(inputveld);
    element.style.border = "2px solid red";

    let errorVeld = document.getElementById(inputveld + "Error");
    errorVeld.textContent = boodschap;
    errorVeld.style.color = "red";
}

const controleerVoornaam = () => {
    let voornaam = document.getElementById("voornaam");

    if(voornaam.value.length > 30){
        toonError("voornaam","max. 30 karakters");
        return false;
    }
    return true;
}

const controleerFamilienaam = () => {
    let familienaam = document.getElementById("familienaam");

    if(familienaam.value.length === 0){
        toonError("familienaam","verplicht veld");
        return false;
    }else if(familienaam.value.length > 50){
        toonError("familienaam","max 50 karakters");
        return false;
    }
    return true;
}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

const controleerOfDatum = (input) => {
    let bool = true;
    if(input.value.length ===  10){
        if(!isGetal(input.value.substring(0,4))|| input.value[4]!=="-"
            || !isGetal(input.value.substring(5,7)) || input.value[7]!=="-"
            || !isGetal(input.value.substring(8,10))){
            bool = false;
        }
    }else{
        bool = false;
    }
    return bool;
}

const controleerGeboortedatum = () => {
    let geboortedatum = document.getElementById("geboortedatum");

    if(geboortedatum.value.length === 0){
        toonError("geboortedatum","verplicht veld");
        return false;
    }else if(!controleerOfDatum(geboortedatum)){
        toonError("geboortedatum","formaat is niet jjjj-mm-dd");
        return false;
    }
    return true;
}

const controleerEmail = () => {
    let email = document.getElementById("email");
    let apenstaartSplits = email.value.split("@");

    if(email.value.length === 0){
        toonError("email","verplicht veld");
        return false;
    }else if(apenstaartSplits.length !== 2 || email.value[0]==="@" || email.value[email.value.length-1]==="@"){
        toonError("email","geen geldig email adres");
        return false;
    }
    return true;
}

const controleerKinderen = () => {
    let kinderen = document.getElementById("kinderen");

    if(isNaN(kinderen.value)){
        toonError("kinderen","is geen positief getal");
        return false;
    }else{
        if(kinderen.value < 0){
            toonError("kinderen","is geen positief getal");
            return false;
        }else if(kinderen.value >= 99){
            toonError("kinderen","is te vruchtbaar");
            return false;
        }
    }
    return true;
}

window.addEventListener("load", setup);
const setup = () => {
    // deze code wordt pas uitgevoerd
    // als de pagina volledig is ingeladen
    aantalAnTellenMetIndexOf();
    aantalAnTellenMetLastIndexOf();
}

const aantalAnTellenMetIndexOf = () => {
    let tekst = document.getElementById("tekst").textContent.toLowerCase();

    let index = 0;
    let aantal = 0;

    while (tekst.indexOf("an", index) !== -1) {
        index = tekst.indexOf("an", index) + 2;
        aantal++;
    }
    console.log(aantal);
}

const aantalAnTellenMetLastIndexOf = () => {
    let tekst = document.getElementById("tekst").textContent.toLowerCase();

    let index = tekst.length;
    let aantal = 0;

    while (tekst.lastIndexOf("an", index) !== -1) {
        index = tekst.lastIndexOf("an", index) - 2;
        aantal++;
    }
    console.log(aantal);
}

window.addEventListener("load", setup);
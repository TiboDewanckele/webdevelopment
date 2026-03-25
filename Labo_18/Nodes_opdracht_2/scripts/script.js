const setup = () => {
    createStyleElement()
    geefLiElementenListItemKlasse();
    maakImgElement();
}

const createStyleElement = () => {
    let head = document.querySelector("head");

    let style = document.createElement("style");
    let text = document.createTextNode(".listItem{color:red}");
    head.appendChild(style);
    style.append(text);
}

const geefLiElementenListItemKlasse = () => {
    let liElementen = document.querySelectorAll("li");
    for(let i=0; i<liElementen.length; i++) {
        liElementen[i].setAttribute("class","listItem");
    }
}

const maakImgElement = () => {
    let body = document.querySelector("body");
    let img = document.createElement("img");
    img.setAttribute("src","img/Tibo_Dewanckele.jpg.jpg");

    body.appendChild(img);
}
window.addEventListener("load", setup);
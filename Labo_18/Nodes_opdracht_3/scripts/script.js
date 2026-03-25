const setup = () => {
    let button = document.querySelector("button");
    button.addEventListener("click", voegPToeAanDiv)
}

const voegPToeAanDiv = () => {
    let div = document.querySelector("div");
    let p = document.createElement("p");
    let txt = document.createTextNode("p");
    div.appendChild(p);
    p.append(txt);
}

window.addEventListener("load", setup);
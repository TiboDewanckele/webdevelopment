const setup = () => {
    let buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click",()  => veranderKleur(i));
    }
}

const veranderKleur = (index) => {
    let buttons = document.getElementsByTagName("button");
    let button = buttons[index];

    if (button.style.backgroundColor === "lightblue") {
        button.style.backgroundColor = "white";
        button.style.color = "black";
    } else {
        button.style.backgroundColor = "lightblue";
        button.style.color = "white";
    }
}

window.addEventListener("load", setup);

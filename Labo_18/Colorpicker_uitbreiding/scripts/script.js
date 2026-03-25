const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
        sliders[i].addEventListener("change", update);
    }

    let button = document.querySelector("button");
    button.addEventListener("click", kopieSwatchMaken);

    update();
};

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let values = document.getElementsByTagName("span");

    let red = sliders[0].value;
    let green = sliders[1].value;
    let blue = sliders[2].value;

    values[0].textContent = red;
    values[1].textContent = green;
    values[2].textContent = blue;

    let colorDemo = document.getElementsByClassName('colorDemo');
    colorDemo[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    colorDemo[0].setAttribute("rood", red);
    colorDemo[0].setAttribute("groen", green);
    colorDemo[0].setAttribute("blauw", blue);
}

const kopieSwatchMaken = () => {
    let swatch = document.querySelector(".colorDemo");

    let kopie = document.createElement("div");
    let rood = Number(swatch.getAttribute("rood"));
    let groen = Number(swatch.getAttribute("groen"));
    let blauw = Number(swatch.getAttribute("blauw"));

    let button = document.createElement("button");
    let txt = document.createTextNode("X");

    let divKopies = document.querySelector("#kopie");
    divKopies.appendChild(kopie);
    kopie.style.backgroundColor = `rgb(${rood}, ${groen}, ${blauw})`;
    kopie.style.height = "100px";
    kopie.style.width = "100px";
    kopie.style.border = "1px solid black";
    kopie.style.margin = "5px";
    kopie.style.display = "inline-block";

    kopie.setAttribute("rood", String(rood));
    kopie.setAttribute("groen", String(groen));
    kopie.setAttribute("blauw", String(blauw));


    kopie.appendChild(button);
    button.append(txt);

    button.addEventListener("click", (event) => {
        event.stopPropagation();
        kopie.remove();
    });

    kopie.addEventListener("click", zetSlidersTerug);
}

const zetSlidersTerug = (event) => {
    const kopie = event.currentTarget;

    const rood = kopie.getAttribute("rood");
    const groen = kopie.getAttribute("groen");
    const blauw = kopie.getAttribute("blauw");

    const sliders = document.getElementsByClassName("slider");

    sliders[0].value = rood;
    sliders[1].value = groen;
    sliders[2].value = blauw;

    update();
}

window.addEventListener("load", setup);
const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
        sliders[i].addEventListener("change", update);
    }

    let button = document.querySelector("button");
    button.addEventListener("click", kopieSwatchMaken);

    setSlidersMetLocalStorage();
    setKopiesTerugBijRefresh();
    update();
};

const setSlidersMetLocalStorage = () => {
    let sliders = document.getElementsByClassName("slider");

    sliders[0].value = localStorage.getItem("red");
    sliders[1].value = localStorage.getItem("green");
    sliders[2].value = localStorage.getItem("blue");
}

const setKopiesTerugBijRefresh = () => {
    let arrayString = localStorage.getItem("kopies");
    if(arrayString !== null) {
        let array = [];
        let arrayIndex = 0;
        let index = 0;
        while (arrayString.indexOf("/", index) !== -1) {
            array[arrayIndex] = JSON.parse(arrayString.substring(index, arrayString.indexOf("/", index)));
            arrayIndex++;
            index = arrayString.indexOf("/", index) + 1;
        }
        array[arrayIndex] = JSON.parse(arrayString.substring(index));
        for(let i = 0; i < array.length; i++) {
            console.log(array[i]);
            let kopie = document.createElement("div");
            let rood = Number(array[i].rood);
            let groen = Number(array[i].groen);
            let blauw = Number(array[i].blauw);

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
            kopie.className = "kopie";

            kopie.setAttribute("rood", String(rood));
            kopie.setAttribute("groen", String(groen));
            kopie.setAttribute("blauw", String(blauw));

            kopie.appendChild(button);
            button.append(txt);

            button.addEventListener("click", (event) => {
                event.stopPropagation();
                kopie.remove();
                slaKopiesOp()
            });

            kopie.addEventListener("click", zetSlidersTerug);
            slaKopiesOp();
        }
    }
}

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

    localStorage.setItem("red", red);
    localStorage.setItem("green", green);
    localStorage.setItem("blue", blue);
}

const kopieSwatchMaken = () => {
    let swatch = document.querySelector(".colorDemo");
    let rood = Number(swatch.getAttribute("rood"));
    let groen = Number(swatch.getAttribute("groen"));
    let blauw = Number(swatch.getAttribute("blauw"));

    let arrayString = localStorage.getItem("kopies");
    let array = [];
    if(arrayString !== null) {
        let arrayIndex = 0;
        let index = 0;
        while (arrayString.indexOf("/", index) !== -1) {
            array[arrayIndex] = JSON.parse(arrayString.substring(index, arrayString.indexOf("/", index)));
            arrayIndex++;
            index = arrayString.indexOf("/", index) + 1;
        }
        array[arrayIndex] = JSON.parse(arrayString.substring(index));
    }
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (Number(array[i].rood) === rood && Number(array[i].groen) === groen && Number(array[i].blauw) === blauw) {
            console.log("Deze bestaat al");
            return false;
        }
    }

    let kopie = document.createElement("div");

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
    kopie.className = "kopie";

    kopie.setAttribute("rood", String(rood));
    kopie.setAttribute("groen", String(groen));
    kopie.setAttribute("blauw", String(blauw));

    kopie.appendChild(button);
    button.append(txt);

    button.addEventListener("click", (event) => {
        event.stopPropagation();
        kopie.remove();
        slaKopiesOp();
    });

    kopie.addEventListener("click", zetSlidersTerug);
    slaKopiesOp();
}


const slaKopiesOp = () => {
    let kopies = document.getElementsByClassName("kopie");
    let array = [];
    for (let i = 0; i < kopies.length; i++) {
        let kopie = {
            rood:kopies[i].getAttribute("rood"),
            groen:kopies[i].getAttribute("groen"),
            blauw:kopies[i].getAttribute("blauw"),
        }
        array.push(JSON.stringify(kopie));
    }
    localStorage.setItem("kopies",array.join("/"));
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
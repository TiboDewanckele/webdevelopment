let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    isBusy: false
}

const setup = () => {
    genereerSpelbord();
}

const vulKaarten = () => {
    let images = geefAfbeeldingen();
    let kaarten = [];

    images.forEach(img => {
        kaarten.push(img);
        kaarten.push(img);
    });

    kaarten.sort(() => Math.random() - 0.5);
    return kaarten;
};

const geefAfbeeldingen = () => {
    return [
        "kaart1.png",
        "kaart2.png",
        "kaart3.png",
        "kaart4.png",
        "kaart5.png",
        "kaart6.png"
    ];
}

const genereerSpelbord = () => {
    let body = document.querySelector("body");

    let spelbord = document.createElement("div");
    spelbord.setAttribute("id", "spelbord");
    spelbord.style.gridTemplateColumns = "repeat(" + global.AANTAL_HORIZONTAAL + ", 1fr)";
    spelbord.style.gridTemplateRows = "repeat(" + global.AANTAL_VERTICAAL + ", 1fr)";

    body.prepend(spelbord);
    genereerKaartenOpSpelBord();
}

const genereerKaartenOpSpelBord= () => {
    let kaarten = vulKaarten();
    let spelbord = document.querySelector("#spelbord");
    for(let i = 0; i < global.AANTAL_HORIZONTAAL; i++) {
        for (let j=0; j < global.AANTAL_VERTICAAL; j++) {
            let div = document.createElement("div");
            div.classList.add("kaart");
            spelbord.append(div);

            let img = document.createElement("img");
            img.setAttribute("src","images/achterkant.png");
            img.setAttribute("kaart", kaarten[i*global.AANTAL_VERTICAAL+j]);
            div.append(img);

            img.addEventListener("click", draaiKaartOm);
        }
    }
}

const isKaartGedraaid = (img) => {
    return img.getAttribute("src")!=="images/achterkant.png"
}

const draaiKaartOm = (event) => {
    if (global.isBusy) return;
    let audio = new Audio('sounds/kaart_omdraaien.mp3');
    audio.play();
    let img = event.target;
    let kaart = img.getAttribute("kaart");
    img.setAttribute("src", "images/" + kaart);
    if(hoeveelKaartenGedraaid()===2){
        global.isBusy = true;
        if(zijnGedraaideKaartenMatch()){
            let images = document.querySelectorAll("img");
            images.forEach(img => {
                if (isKaartGedraaid(img)) {
                    img.parentElement.style.border = "3px solid green";
                }
            });
            setTimeout(verwijderPaar,1000);
        }else{
            let images = document.querySelectorAll("img");
            images.forEach(img => {
                if (isKaartGedraaid(img)) {
                    img.parentElement.style.border = "3px solid red";
                }
            });
            setTimeout(draaiKaartenTerug,1000);
        }
    }
}

const verwijderPaar = () => {
    let images = document.querySelectorAll("img");
    images.forEach(img => {
        if(isKaartGedraaid(img)){
            img.setAttribute("src", "images/achterkant.png");
            img.style.visibility = "hidden";
            img.parentElement.style.border = "none";
        }
    })
    global.isBusy = false;

    let audio = new Audio('sounds/correct.mp3');
    audio.play();

    controleerEindeSpel();
}

const draaiKaartenTerug = () => {
    let images = document.querySelectorAll("img");

    let audio = new Audio('sounds/Kaart_terugdraaien.mp3');
    audio.play();

    images.forEach(img => {
        if (isKaartGedraaid(img)) {
            img.setAttribute("src", "images/achterkant.png");
            img.parentElement.style.border = "2px solid black";
        }
    });
    global.isBusy = false;
}

const hoeveelKaartenGedraaid = () => {
    let images = document.querySelectorAll("img");
    let aantalGedraaid = 0;
    images.forEach(img => {
        if(isKaartGedraaid(img)){
            aantalGedraaid++;
        }
    })
    return aantalGedraaid;
}

const zijnGedraaideKaartenMatch = () => {
    let images = document.querySelectorAll("img");
    let srcs = []
    images.forEach(img => {
        let src = img.getAttribute("src")
        if(isKaartGedraaid(img)){
            srcs.push(src);
        }
    })
    if(srcs[0]===srcs[1]){
        return true;
    }else{
        return false;
    }
}

const controleerEindeSpel = () => {
    let images = document.querySelectorAll("img");
    let nogZichtbaar = false;

    images.forEach(img => {
        if (img.style.visibility !== "hidden") {
            nogZichtbaar = true;
        }
    });

    if (!nogZichtbaar) {
        let audio = new Audio('sounds/winning_sound.mp3');
        audio.play();
        alert("Proficiat, je hebt het spel gewonnen!");
    }
}

window.addEventListener("load", setup);
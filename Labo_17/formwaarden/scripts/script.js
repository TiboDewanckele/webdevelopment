const setup = () => {
    let btn = document.getElementById("button");

    btn.addEventListener("click", () => toonResultaat());
};

function toonResultaat() {
    isRoker();
    moedertaal();
    buurland();
    order();
    console.log("");
}

const isRoker = () => {
    let isRoker = document.getElementById("roker").checked;
    if(isRoker) {
        console.log("is een roker");
    }else{
        console.log("is geen roker");
    }
}

const moedertaal = () => {
    let nederlands = document.getElementById("nl").checked;
    if(nederlands) {
        console.log("moedertaal is nl");
    }else{
        let frans = document.getElementById("fr");
        if(frans) {
            console.log("moedertaal is fr");
        }else{
            let engels = document.getElementById("en");
            if(engels) {
                console.log("moedertaal is en");
            }else{
                console.log("Geen moedertaal aangeduid");
            }
        }
    }
}

const buurland = () => {
    let buurland = document.getElementById("buurland");
    console.log("favoriete buurland is " + buurland.value);
}

const order = () => {
    let order = document.getElementById("order");
    let array = [];
    let aantal = 0;

    for(let i = 0; i < order.options.length; i++) {
        if(order.options[i].selected) {
            array[aantal] = order.options[i].value;
            aantal++;
        }
    }

    if(array.length > 0){
        console.log("bestelling bestaat uit " + array.join(" "));
    }else{
        console.log("bestelling bestaat niet");
    }
}

window.addEventListener("load", setup);
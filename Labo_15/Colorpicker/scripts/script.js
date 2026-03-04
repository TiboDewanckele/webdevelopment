const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
        sliders[i].addEventListener("change", update);
    }

    update();
};

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let values = document.getElementsByTagName("span");

    let red = sliders[0].value;
    let green = sliders[1].value;
    let blue = sliders[2].value;

    values[0].innerHTML = red;
    values[1].innerHTML = green;
    values[2].innerHTML = blue;

    let colorDemo = document.getElementsByClassName('colorDemo');
    colorDemo[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

window.addEventListener("load", setup);

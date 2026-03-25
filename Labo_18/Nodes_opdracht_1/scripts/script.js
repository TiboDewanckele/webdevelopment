const setup = () => {
    let pElement = document.querySelectorAll("p")[0];

    pElement.textContent = "Goed gedaan!"
}
window.addEventListener("load", setup);
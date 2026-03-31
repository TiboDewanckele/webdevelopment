let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 3000,
    score: 0,
    timeoutId: 0
};


const setup = () => {
    const start = document.querySelector("#start");
    start.addEventListener("click", startSpel)
};

const reset = () => {
    global.timeoutId = 0;
    global.score = 0;

    let scoreSpan = document.querySelector("#scoreSpan");
    if(scoreSpan) {
        scoreSpan.remove();
    }
}

const startSpel = () => {
    reset();
    const sprite = document.querySelector("#target");
    sprite.addEventListener("click", alertOfVerplaats);

    automatischeActie();
    global.timeoutId = setInterval(automatischeActie, global.MOVE_DELAY);
    maakScoreDisplayAan();
}

const automatischeActie = () => {
    verplaatsSprite();
    veranderSprite();
    console.log(global.score);
}

const alertOfVerplaats = () => {
    const sprite = document.querySelector("#target");
    if(sprite.getAttribute("src")===global.IMAGE_PATH_PREFIX + 0 + global.IMAGE_PATH_SUFFIX) {
        alert("Je hebt geklikt op de bom");
        stopSpel();
    }else {
        verplaatsSprite();
        veranderSprite();
        updateScoreDisplay();
    }
}

const verplaatsSprite = () => {
    const sprite = document.querySelector("#target");
    const playField = document.getElementById("playField");

    const maxX = playField.clientWidth - global.IMAGE_SIZE;
    const maxY = playField.clientHeight - global.IMAGE_SIZE;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    sprite.style.left = randomX + "px";
    sprite.style.top = randomY + "px";
}

const veranderSprite = () => {
    const sprite = document.querySelector("#target");

    const randomIndex = Math.floor(Math.random() * global.IMAGE_COUNT);
    sprite.setAttribute("src", global.IMAGE_PATH_PREFIX + randomIndex + global.IMAGE_PATH_SUFFIX);
}

const maakScoreDisplayAan = () => {
    let hoofdDiv = document.querySelectorAll("div")[0];
    let scoreSpan = document.createElement("span");
    scoreSpan.id = "scoreSpan";
    scoreSpan.textContent = "Score: " + global.score;
    hoofdDiv.appendChild(scoreSpan);
}

const updateScoreDisplay = () => {
    global.score++;
    let scoreSpan = document.querySelector("#scoreSpan");
    scoreSpan.textContent = "Score: " + global.score;
}

const stopSpel = () => {
    clearInterval(global.timeoutId);

    const sprite = document.querySelector("#target");
    sprite.removeEventListener("click", alertOfVerplaats);
}

window.addEventListener("load", setup);
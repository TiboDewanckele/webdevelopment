const setup = () => {
    let button = document.querySelector('#goButton');
    button.addEventListener('click', goToSearchPage);
    historyLaden();
};

const getCommando = () => {
    let input = document.querySelector('#input').value;
    if (!(input.startsWith("/") && input[2] === " ")) {
        alert("Invalid command");
        return null;
    }

    const valid = ["g", "y", "i", "x"];
    const letter = input.charAt(1);
    if (valid.includes(letter)) {
        return letter;
    }
    alert("Unknown command prefix");
    return null;
};

const getZoekOpdracht = () => {
    let input = document.querySelector('#input').value;
    if (getCommando() === null) {
        return null;
    }
    return input.substring(input.indexOf(" ") + 1);
};

const resetInputVeld = () => {
    document.querySelector('#input').value = "";
};

const goToSearchPage = () => {
    let link = document.querySelector('#link');
    let commando = getCommando();
    let zoekopdracht = getZoekOpdracht();
    if (zoekopdracht === null || commando === null) {
        return;
    }

    let site = "";
    if (commando === "g") {
        link.href = "https://www.google.com/search?q=" + zoekopdracht.replaceAll(" ", "%20");
        site = "Google";
    }
    else if (commando === "y") {
        link.href = "https://www.youtube.com/results?search_query=" + zoekopdracht.replaceAll(" ", "+");
        site = "YouTube";
    }
    else if (commando === "x") {
        link.href = "https://x.com/hashtag/" + zoekopdracht.replaceAll(" ", "%20");
        site = "Twitter";
    }
    else if (commando === "i") {
        link.href = "https://www.instagram.com/explore/tags/" + zoekopdracht.replaceAll(" ", "+");
        site = "Instagram";
    }
    link.target = "_blank";

    slaOpInLocalStorage(site, zoekopdracht, link.href);
    voegHistoryBlokToe(site, zoekopdracht, link.href);

    resetInputVeld();
};

const slaOpInLocalStorage = (site, zoekopdracht, url) => {
    let history = localStorage.getItem("history");
    if (history === null || history === "") {
        history = [];
    } else {
        history = JSON.parse(history);
    }

    let object = {
        title: site,
        text: zoekopdracht,
        url: url
    };
    history.push(object);
    localStorage.setItem("history", JSON.stringify(history));
};

const voegHistoryBlokToe = (site, zoekopdracht, url) => {
    const historyRow = document.querySelector('#historyRow');

    let col = document.createElement('div');
    col.className = "col-4";

    let card = document.createElement('div');
    card.className = site;
    card.style.padding = "10px";
    card.style.margin = "10px 0";

    let h3 = document.createElement('h3');
    h3.textContent = site;
    let p = document.createElement('p');
    p.textContent = zoekopdracht;
    const a = document.createElement('a');
    a.href = url;
    a.target = "_blank";
    let btn = document.createElement('button');
    btn.textContent = "Go!";

    a.appendChild(btn);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(a);
    col.appendChild(card);
    historyRow.appendChild(col);
};

const historyLaden = () => {
    let history = localStorage.getItem("history");
    if (history === null) {
        history = [];
    } else {
        history = JSON.parse(history);
    }

    for (let i = 0; i < history.length; i++) {
        let object = history[i];
        voegHistoryBlokToe(object.title, object.text, object.url);
    }
};

window.addEventListener('load', setup);
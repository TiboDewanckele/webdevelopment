const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let input = [];
    let index = -1;

    do{
        index++;
        input[index] = prompt("Geef een gemeente in");
    }while(input[index]!=='stop')

    input.pop();
    let sorted = input.sort();

    let keuze = document.getElementById("select");
    keuze.innerHTML = "<label for=\"select\"></label><select id=\"select\">";
    for(let i = 0; i < sorted.length; i++){
        console.log(sorted[i]);
        keuze.innerHTML += "<option value=\"" + sorted[i] + "\">" + sorted[i] + "</option>";
    }
}
window.addEventListener("load", setup);
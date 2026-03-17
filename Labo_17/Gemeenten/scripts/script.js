const setup = () => {
    let input = [];
    let index = -1;

    do{
        index++;
        input[index] = prompt("Geef een gemeente in");
    }while(input[index]!=='stop')

    input.pop();
    let sorted = input.sort();

    let keuze = document.getElementById("select");
    for(let i = 0; i < sorted.length; i++){
        console.log(sorted[i]);
        keuze.innerHTML += "<option value=\"" + sorted[i] + "\">" + sorted[i] + "</option>";
    }
}
window.addEventListener("load", setup);
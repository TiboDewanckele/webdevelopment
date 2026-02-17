const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    const familieleden = ['Max','Tibo','Lewis','Romeo','Julia'];
    console.log(familieleden.length);
    for (let i = 0; i < familieleden.length; i += 2) {
        console.log(familieleden[i]);
    }
    VoegNaamToe(familieleden);
    console.log(familieleden);
    console.log(familieleden.join(' '));
}

const VoegNaamToe = (familieleden) => {
    familieleden.push(prompt("Wat is de naam van uw familielid?"));
}

window.addEventListener("load", setup);
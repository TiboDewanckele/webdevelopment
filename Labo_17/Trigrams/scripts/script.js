const setup = () => {
    let input = 'onoorbaar'

    let output = [];
    for(let i=0; i<input.length-2; i++) {
        output[i] = input.substring(i, i+3);
    }

    console.log(output.join(' - '));
}

window.addEventListener("load", setup);
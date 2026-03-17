const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";

    let array = [''];
    let aantal = 0;
    let index=0;
    while(tekst.toLowerCase().indexOf(" de ",index) !== -1){
        array[aantal] = tekst.substring(index, tekst.indexOf(" de ",index));
        aantal++;
        index = tekst.indexOf(" de ",index) + 4;
    }
    array[aantal] = tekst.substring(index);

    console.log(array.join(' het '));
}
window.addEventListener("load", setup);
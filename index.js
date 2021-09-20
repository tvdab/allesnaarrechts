function verPlaatsOptionNaar(option, id) {
  document.getElementById(id).appendChild(option);
}

document.getElementById("allesNaarRechts").onclick = function() {
    const options = document.getElementById("links").options;
    /*
    [...options].forEach(
        option => {verPlaatsOptionNaar(option, "rechts")}
    )
    

    for (const option of options) {
        verPlaatsOptionNaar(option, "rechts");
    }

    for (const option of [...options]) {
        verPlaatsOptionNaar(option, "rechts");
    }

    */

    for (let i = 0; i < options.length; i++){
        verPlaatsOptionNaar(options[i], "rechts");
    }

}
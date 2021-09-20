function verPlaatsOptionNaar(option, id) {
  document.getElementById(id).appendChild(option);
}

document.getElementById("allesNaarRechts").onclick = function() {
    const options = document.getElementById("links").options;
    /*

    //werkt:
    [...options].forEach(
        option => {verPlaatsOptionNaar(option, "rechts")}
    )
    
    //werkt niet:
    for (const option of options) {
        verPlaatsOptionNaar(option, "rechts");
    }
    
    //werkt:
    for (const option of [...options]) {
        verPlaatsOptionNaar(option, "rechts");
    }

    */
    
    //werkt nietk
    for (let i = 0; i < options.length; i++){
        verPlaatsOptionNaar(options[i], "rechts");
    }

}
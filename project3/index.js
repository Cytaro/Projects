const calculate = () => {
    let port = document.querySelector("#port").value;
    let hist = document.querySelector("#hist").value;
    let mate = document.querySelector("#mate").value;
    let fis = document.querySelector("#fis").value;
    let nota = "";
    let totalnotas =
        parseFloat(port) +
        parseFloat(hist) +
        parseFloat(mate) +
        parseFloat(fis);
    let calculo = (totalnotas / 4);
    if (calculo <= 10 && calculo >= 8) {
        nota = "entre 10 e 8";
    } else if (calculo <= 7 && calculo >= 6) {
        nota = "entre 7 e 6";
    } else if (calculo <= 5 && calculo >= 4) {
        nota = "nota 5";
    } else {
        nota = "entre 5 e 4";
    }
    if (port == "" || hist == ""
                || mate == "" || fis == "") {
        document.querySelector("#showdata").innerHTML
            = "Please enter all the fields";
    } else {
        if (calculo >= 5) {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            ` Nota final é ${nota}. Voce passou. `;
        } else {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            ` Nota final é ${nota}. Voce Reprovou. `;
        }
    }
};

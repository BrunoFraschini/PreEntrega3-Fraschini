function correccion() {
    let total = 5;
    let puntos = 0;
    let miFormulario = document.forms["trivia"];
    let respuestas = ["a", "c", "b", "a", "b"];

    for (let i = 1; i <= total; i++) {
        if(miFormulario["p" + i].value == null || miFormulario["p" + i].value == "") {
            let resultado = document.querySelector("#resultado");
            resultado.innerHTML = "<h3> Responde la pregunta " + i + " por favor</h3>"
            return false;
        } else {
            if (miFormulario["p" + i].value === respuestas[i - 1]) {
                puntos++;
            }
        }
    }

    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = "<h2> Obtuviste <span>" + puntos + "</span> de <span>" + total + " puntos</span></h2>"

    return false;
}


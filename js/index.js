const teclas = document.querySelectorAll (".tecla");

function tocaSom (idElementoAudio) {
    const elemento = document.querySelector (idElementoAudio);
    if (elemento && elemento.localName === "audio") {
        elemento.play ();
    } else {
        console.log ("elemento não encontrado ou seletor inválido");
    }
}

for (let contador = 0; contador < teclas.length; contador++) {

    const tecla = teclas[contador];
    const instrumentos = tecla.classList[1];
    const idAudio = `#som_${instrumentos}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {
        if (event.code === "Space" || event.code === "Enter") {
            tecla.classList.add ("ativa");
        } 
    }

    tecla.onkeyup = function () {
        tecla.classList.remove ("ativa");
    }
}

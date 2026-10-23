const primer_boton = document.getElementById("boton-nombre");
const segundo_boton = document.getElementById("boton-texto");
const parrafo = document.getElementById("parrafo");

primer_boton.addEventListener("click", function () {
    alert("Sebastian 'Dedmos' Ayala Ortega");
});

segundo_boton.addEventListener("click", function () {
    parrafo.innerHTML = "¡Texto actualizado con Javascript!";
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("La pagina ha sido cargada");
});

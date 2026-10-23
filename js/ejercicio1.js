const boton = document.getElementById("boton_ejercicio");
const espacio_texto = document.getElementById("texto");

boton.addEventListener("click", function () {
    espacio_texto.innerHTML = "¡Texto actualizado con Javascript!";
})

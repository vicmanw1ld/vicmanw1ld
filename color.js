const color = document.querySelector("#color");
const salida = document.querySelector("#salida");
const back = document.querySelector("#back")

color.addEventListener("input", () => {
    const value = color.value;
    salida.innerHTML = value;
    // salida.style.background = value;
    back.style.background = value;
});
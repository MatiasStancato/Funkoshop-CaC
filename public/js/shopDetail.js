const suma = document.querySelector("#displaySuma");
const resta = document.querySelector("#displayResta");
const resultado = document.querySelector("#displayDetalle");

suma.addEventListener(
  "click",
  () => (resultado.value = Number(resultado.value) + 1)
);
resta.addEventListener("click", () => {
  resultado.value =
    Number(resultado.value) === 0 ? 0 : Number(resultado.value) - 1;
});
resultado.addEventListener(
  "change",
  () =>
    (resultado.value =
      Number(resultado.value) < 0 ? 0 : Number(resultado.value))
);

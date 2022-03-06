/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector("form");
const input = document.getElementById("search");
const output = document.getElementById("output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let lb = input.value * 2.2046;
  let g = input.value / 0.001;
  let oz = input.value * 35.274;
  output.innerHTML = lb + " (lb)<br>" + g + " (g)<br>" + oz + " (oz)";
  input.value = "";
});

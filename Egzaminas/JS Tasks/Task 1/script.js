/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.getElementById("submit-btn").addEventListener("click", convert);
let pound = undefined;
let gramm = undefined;
let ounce = undefined;
function convert(event) {
  event.preventDefault();
  mase_kg = Number(document.getElementById("search").value);
  svaras = document.getElementById("radio1");
  gramas = document.getElementById("radio2");
  uncija = document.getElementById("radio3");
  if (svaras.checked == true) {
    pound = mase_kg * 2.2046;
    gramas.checked = false;
    uncija.checked = false;
    document.getElementById("output").innerHTML = `Masė svarais ${pound}`;
  } else if (gramas.checked == true) {
    gramm = mase_kg * 1000;
    svaras.checked = false;
    uncija.checked = false;
    document.getElementById("output").innerHTML = `Masė gramais ${gramm}`;
  } else if(uncija.checked == true){
    ounce = mase_kg * 35.274;
    gramas.checked = false;
    svaras.checked = false;
    document.getElementById("output").innerHTML = `Masė uncijomis ${ounce}`;
  }
  else {alert("Niekas nepasirinkta")};
}

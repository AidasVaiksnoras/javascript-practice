/*
## Žaidimas
1. Nupieškite kvadratėlį ir jį pozicionuokite absolučiai lange. 
2. Padarykite, kad kvadratėlio vietą būtų galima lengvai keisti, keičiant kintamųjų reikšmes
3. Padarykite, kad kvadratėlis atsirastų atsitiktinėje vietoje svetainėje, ją užkrovus
4. Padarykite, kad paspaudus rodyklę į dešinę, kvadratėlis pasistumtų per 1px į dešinę.
4. Padarykite, kad paspaudus rodyklę į viršų, kvadratėlis pasistumtų per 1px į viršų.
4. Padarykite, kad paspaudus rodyklę į apačią, kvadratėlis pasistumtų per 1px į apačią.
4. Padarykite, kad paspaudus rodyklę į kairę, kvadratėlis pasistumtų per 1px į kairę.
4. Padarykite, kad kvadratėlis neišeitų už puslapio ribų.
4. Padarykite, kad paspaudus rodyklę į kairę, kvadratėlis pasistumtų per 1px į kairę.
4. Padarykite, kad vienas kvadratėlis būtų jūsų judinamas objektas (žaidėjas), o kitas kvdratėlis atsitiktinėje vietoje atsirandantis maistas.
4. Užfiksuokite kai žaidjas užlipa ant maisto.
4. Atspausdinkite rezultata html elemente.
*/

const kvadLeft = 30;
const kvadTop = 30;

document.querySelector(`div`).style.left = kvadLeft + `px`;
document.querySelector(`div`).style.top = kvadTop + `px`;

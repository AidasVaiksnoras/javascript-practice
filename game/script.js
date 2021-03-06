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

let x = 30;
let y = 30;
let speed = 5;
document.addEventListener('keydown', move);

function move(event) {
  if (event.key == 'ArrowDown') {
    y += speed;
  } else if (event.key == 'ArrowUp') {
    y -= speed;
  } else if (event.key == 'ArrowRight') {
    x += speed;
  } else if (event.key == 'ArrowLeft') {
    x -= speed;
  }
  document.querySelector(`div`).style.left = x + `px`;
  document.querySelector(`div`).style.top = y + `px`;
  console.log(event);
}

function createFoodElement(x, y) {
  let element = document.createElement('div');

  element.style.height = '20px';
  element.style.width = '20px';
  element.style.backgroundColor = 'yellow';
  element.style.position = 'absolute';
  element.style.top = x + 'px';
  element.style.left = y + 'px';

  document.body.append(element);
}

for (let i = 1; i < 4; i++) {
  let xx = Math.floor(Math.random() * (window.innerWidth - 15));
  let yy = Math.floor(Math.random() * (window.innerHeight - 15));
  createFoodElement(xx, yy);
}

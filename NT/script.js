fetch("https://robust-safe-crafter.glitch.me/")
  .then((Response) => Response.json())
  .then((data) => console.log(data));
function drawCards() {
  const card = document.createElement("div");
  const divImage = document.createElement("div");
  const cardImg = document.createElement("img");
  const divPara = document.createElement("div");
  const paragraph1 = document.createElement("p");
  const paragraph2 = document.createElement("p");
  const paragraph3 = document.createElement("p");
  card.append(divImage, divPara);
  divImage.append(cardImg);
  divPara.append(paragraph1, paragraph2, paragraph3);
  document.querySelector(".card-wrapper").append(card);
  card.className = "card";
  divImage.className = "img";
  divPara.className = "card-footer";
  paragraph1.className = "price";
  paragraph2.className = "city";
  paragraph3.className = "info";
}
drawCards();

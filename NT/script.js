const state = { properties: [] };
fetch("https://robust-safe-crafter.glitch.me/")
  .then((Response) => Response.json())
  .then((data) => {
    drawCards(data);
    state.properties = data;
  });
function drawCards(properties) {
  const cardWrapper = document.querySelector(".card-wrapper");
  cardWrapper.innerHTML = "";
  properties.forEach((element) => {
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
    cardWrapper.append(card);

    card.className = "card";
    divImage.className = "img";
    divPara.className = "card-footer";
    paragraph1.className = "price";
    paragraph2.className = "city";
    paragraph3.className = "info";
    paragraph1.textContent = element.price;
    paragraph2.textContent = element.city;
    paragraph3.textContent = element.description;
    cardImg.src = element.image;
  });
}
document.getElementById("Vno").addEventListener("click", (e) => {
  const FilterProperties = state.properties.filter(
    (element) => element.city === "Vilnius"
  );
  drawCards(FilterProperties);
});

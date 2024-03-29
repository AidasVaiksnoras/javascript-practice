fetch("https://golden-whispering-show.glitch.me")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    renderData(data);
  });

function renderData(products) {
  products.forEach((product) => {
    const cards = document.getElementById("crd");
    const card = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("div");
    const price = document.createElement("div");
    const button = document.createElement("button");
    card.setAttribute("class", "card");
    price.className = "price";
    img.src = product.image;
    title.textContent = product.title;
    price.textContent = "\u20AC" + product.price;
    button.textContent = "Istrinti";
    button.id = product.id;
    button.addEventListener("click", eraseItem);
    cards.append(card);
    card.append(img, title, price, button);
  });
  function eraseItem(e) {
    fetch("https://golden-whispering-show.glitch.me/" + e.target.id, {
      method: "delete",
    }).then(() => window.location.reload());
  }
}

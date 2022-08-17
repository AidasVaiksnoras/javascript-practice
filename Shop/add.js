const addProduct = document.getElementById("itemForm");
addProduct.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  const itemImage = document.getElementById("img").value;
  const itemTtile = document.getElementById("title").value;
  const itemPrice = document.getElementById("price").value;
  const item = { image: itemImage, title: itemTtile, price: itemPrice };

  fetch("https://golden-whispering-show.glitch.me", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  }).then((response) => {
    if (response.ok) {
      alert("Sėkimingai pridėjome prekę");
      window.location.replace("./index.html");
    } else {
      alert("Klaida");
    }
  });
});

document.getElementById("addBtn").addEventListener("click", (e) => {
  e.preventDefault();
  let img = document.querySelector("#img").value;
  let price = document.querySelector("#price").value;
  let description = document.querySelector("#description").value;
  let city = document.querySelector("#city").value;
  let body = { image: img, price: price, description: description, city: city };

  fetch("https://robust-safe-crafter.glitch.me/", {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
});

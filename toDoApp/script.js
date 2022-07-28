class Item {
  constructor(text, index) {
    this.text = text;
    this.index = index;

    const divItem = document.createElement(`div`);
    divItem.className = `to-do-item`;
    divItem.textContent = this.text;
    divItem.id = "to-do-item" + index;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "to-do-checkbox" + index;

    divItem.prepend(checkbox);
    document.getElementById(`toDoContainer`).append(divItem);
  }
}

class TodoControler {
  constructor() {
    this.items = [];
    this.lastIndex = 0;
    const itemsString = localStorage.getItem(`items`);
    const cacheItems = JSON.parse(itemsString);
    for (let i = 0; i < cacheItems.length; i++) {
      const newItem = new Item(cacheItems[i].text, cacheItems[i].index);
      this.items.push(newItem);
    }
    document.getElementById("input-field").addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        const elem = e.target.value;
        const newItem = new Item(elem, this.lastIndex++);
        document.getElementById("input-field").value = "";
        this.items.push(newItem);
        localStorage.setItem(`items`, JSON.stringify(this.items));
      }
    });
  }
}

new TodoControler();

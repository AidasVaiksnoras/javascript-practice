/*class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}*/

class Item {
  constructor(tekstas) {
    const divItem = document.createElement(`div`);
    divItem.className = `to-do-item`;
    divItem.textContent = tekstas;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "to-do-checkbox3";
    divItem.prepend(checkbox);
    document.getElementById(`toDoContainer`).append(divItem);
  }
}

new Item(`isiusti laiska`);
//new Item(`pavalgyti`, checkbox);

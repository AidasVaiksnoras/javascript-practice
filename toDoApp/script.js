/*class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}*/

class Item {
  constructor(text, index) {
    this.text = text;
    this.index = index;

    const divItem = document.createElement(`div`);
    divItem.className = `to-do-item`;
    divItem.textContent = this.text;
    divItem.id = 'to-do-item' + index;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'to-do-checkbox' + index;

    divItem.prepend(checkbox);
    document.getElementById(`toDoContainer`).append(divItem);
  }
}
document.getElementById('input-field').addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    const elem = e.target.value;

    console.log(e.code);
    const newItem = new Item(elem, lastIndex++);
  }
});
const arr = [];
let lastIndex = 0;

new Item(`isiusti laiska`, lastIndex++);

new Item(`pavalgyti`, lastIndex++);

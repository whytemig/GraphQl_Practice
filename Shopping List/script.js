//Practice Classing

class ShoppingList {
  constructor(unOrderList, addButton, addItemText, storageKey = "myList") {
    this.storageKey = storageKey;
    this.unOrderListElement = document.querySelector(unOrderList);
    this.addButtonElement = document.querySelector(addButton);
    this.addItemTextInput = document.querySelector(addItemText);

    this.items = JSON.parse(localStorage.getItem(this.storageKey)) || [
      "orage",
      "pizza",
    ];

    this.initializeFunc();
  }

  initializeFunc() {
    this.addButtonElement.addEventListener("click", () => {
      const textValue = this.addItemTextInput.value;
      this.addItem(textValue);
      this.addItemTextInput.value = "";
      this.renderFunc();
      this.storeItems();
    });
  }

  //function to render the items

  renderFunc() {
    this.unOrderListElement.innerHTML = "";
    if (this.items.length === 0) {
      const innerEle = document.createElement("li");
      innerEle.textContent = "No Items Available";
      this.unOrderListElement.appendChild(innerEle);
    }

    this.items.forEach((item, index) => {
      const itemListEle = document.createElement("li");
      itemListEle.textContent = item;

      //remove button
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-item");
      removeButton.onclick = () => {
        this.removeItem(index);
        this.renderFunc();
        this.storeItems();
      };
      itemListEle.appendChild(removeButton);
      this.unOrderListElement.appendChild(itemListEle);
    });
  }

  addItem(input) {
    this.items.push(input);
  }

  removeItem(index) {
    this.items = this.items.filter((item, i) => index !== i);
  }

  storeItems() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
  }
}

const myList = new ShoppingList("#list-items", "#submit", "#addItemText");

myList.renderFunc();

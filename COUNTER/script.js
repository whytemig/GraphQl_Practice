const addButton = document.querySelector("#add");
const subButton = document.querySelector("#substract");
let number = document.querySelector("#counter");

let total = 0;
function addByOne() {
  total += 1;
  if (total > 20) {
    total = 20;
    return;
  }
  number.textContent = total;
}

function subByOne() {
  total -= 1;
  if (total < 0) {
    total = 0;
    return;
  }
  number.textContent = total;
}

addButton.addEventListener("click", addByOne);

subButton.addEventListener("click", subByOne);

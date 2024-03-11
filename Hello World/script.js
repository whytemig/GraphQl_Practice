const button = document.querySelector("button");
const span = document.querySelector("span");

function getPrompt() {
  let theName = window.prompt("Enter a Name");
  span.textContent = theName;
}

button.addEventListener("click", getPrompt);

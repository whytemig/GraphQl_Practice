const body = document.querySelector("body");
const button = document.querySelector("#button");
const spanColor = document.querySelector("#color");

button.addEventListener("click", generateColor);

function randomColorInHex() {
  // array for color
  let hexValue = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let color = "";

  for (let i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * hexValue.length)];
  }
  return color;
}

function generateColor() {
  let colorValue = randomColorInHex();
  body.style.backgroundColor = `#${colorValue}`;
  spanColor.textContent = `#${colorValue}`;
}

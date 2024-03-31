const btn = document.querySelector("#btn");
const bmiValue = document.querySelector("#bmi-result");
const weightConditioned = document.querySelector("#weight-condition");

btn.addEventListener("click", calculateBmi);

function calculateBmi() {
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;

  const heightInMeters = height / 100;
  const bmi = weight / heightInMeters ** 2;
  let newBmi = Math.round(bmi * 100) / 100;

  bmiValue.value = newBmi;
  // if conditions

  if (newBmi < 18.5) {
    weightConditioned.textContent = `"Under Weight ☹️"`;
  } else if (newBmi >= 18.5 && newBmi <= 24.9) {
    weightConditioned.textContent = `"Normal Weight 😊"`;
  } else if (newBmi >= 25 && newBmi <= 29.9) {
    weightConditioned.textContent = `"OverWeight 😮"`;
  } else if (newBmi >= 30) {
    weightConditioned.textContent = `"Obesity 😫"`;
  }
}

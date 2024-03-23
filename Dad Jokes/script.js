const btn = document.querySelector("#btn");
const joke = document.querySelector("#jokes");

btn.addEventListener("click", getJoke);

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": "FEaTNQb+pDVYweKFpHZOmg==2TDOZUYUgw0HYQpl",
  },
};

async function getJoke() {
  try {
    joke.innerHTML = "...Waiting...";
    btn.classList.add("nobtn");
    const response = await fetch(
      "https://api.api-ninjas.com/v1/jokes?limit=1",
      options
    );
    const data = await response.json();
    joke.innerHTML = data[0].joke;
    btn.classList.remove("nobtn");
    btn.classList.add("btn");
  } catch (error) {
    alert("Something is Wrong. Check Console");
    console.log(error);
  }
}
